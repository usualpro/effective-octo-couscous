import { observer } from 'mobx-react';
import Profile from '../stores/Profile';

export const Modal = observer(
    () => (Profile.modalState.isOpen && Profile[Profile.modalState.category].length > 0)
        ? <div className='modal'>
            <button className="btn backdrop" onClick={() => Profile.closeModal()}></button>
            <div className="modal-inner-content container bg-white py-3">
                <div className="row justify-content-center">
                    <div className="col col-sm-6 col-md-5 gap-3 d-grid">
                        <div className="row">
                            <div className="col">
                                <div className='ratio ratio-1x1'>
                                    <img className='img-fluid rounded-circle' src={Profile.modalState.profile.picture} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-12">
                                <ul className='list-group'>
                                    <li className='list-group-item'><i className={`bi-check-circle${(Profile.modalState.profile.online) ? '-fill' : ''}`}></i> {Profile.modalState.profile.nickname}</li>
                                    <li className='list-group-item'>{Profile.modalState.profile.age}</li>
                                    <li className='list-group-item'>{Profile.modalState.profile.city}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button type="button" className="btn btn-primary w-100" onClick={() => Profile.drop(Profile.modalState.profile)}>
                                    <i className="bi-suit-heart"></i>
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-success w-100" onClick={() => Profile.next(Profile.modalState.profile)}>
                                    <i className="bi-suit-heart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : null
);
