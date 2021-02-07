import { observer } from 'mobx-react';
import Profile from '../stores/Profile';

const showModal = (category, profile) => Profile.showModal(category, profile);


export const ProfileList = observer(
    (props) => (Profile[props.data].length > 0)
        ? <div className="ProfileList">
            <h2 className='text-capitalize fw-bold'>{props.data}</h2>
            <div className="row gy-4">
                {
                    Profile[props.data].map(
                        (e, i) => <div className='col-4 col-md-3 col-lg ' key={i}>
                            <div className="d-grid gap-2">
                                <button className="ratio ratio-1x1 border-0" onClick={() => showModal(props.data, e)}>
                                    <img src={e.picture} data-src={e.picture} alt={e.nickname} className="img-fluid rounded object-fit-cover" />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        : <h4 className='my-3'>No more <b>{props.data}</b> profile to show</h4>
)

