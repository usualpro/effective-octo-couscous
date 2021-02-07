import { runInAction, makeAutoObservable, toJS } from 'mobx';
import Service from '../service';

class Profile {
    online = [];
    featured = [];
    modalState = {
        isOpen: false,
        category: null,
        profile: null
    };

    constructor() {
        makeAutoObservable(this);
        this.fetchData();
    }

    closeModal = () => {
        runInAction(() => {
            this.modalState = {
                isOpen: false,
                category: null,
                profile: null
            }
        });
    }


    showModal = (category, profile) => {
        runInAction(() => {
            this.modalState = {
                category,
                profile,
                isOpen: true
            }
        });
    }

    drop = (profile) => {
        const onlined = this.online.filter(item => item.id !== profile.id);
        const featured = this.featured.filter(item => item.id !== profile.id);
        runInAction(() => {
            this.next(profile);
            this.featured = featured;
            this.online = onlined;
        });
    }

    next = (profile) => {
        const indexOfProfile = Number(this[this.modalState.category].indexOf(profile));
        const model = this[this.modalState.category];
        const nextProfile = (typeof model[indexOfProfile + 1] !== 'undefined')
            ? model[indexOfProfile + 1]
            : model[0];
        runInAction(() => {
            this.modalState = {
                ...this.modalState,
                profile: nextProfile
            }
        });
    }

    fetchData = async () => {
        const featured = await Service.featured();
        const online = await Service.online();
        runInAction(() => {
            this.featured = featured.data;
            this.online = online.data;
        })

    }

}
export default new Profile();