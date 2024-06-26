import React from 'react';
import './StudentSayingCards.css';
import {HiMiniUser} from 'react-icons/hi2'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'

interface props{
    color:string,
    logocolor:string,
    username:string,
    program:string,
    link:string,
    review:string,
    rating:number
}

const StudentSayingCard: React.FC<props> = (props) => {
    const arr=new Array<number>(5);

    for(var i=0; i<arr.length; i++){
        arr[i]=i;
    }
    
    return (
        <div className="studentsayingcard">
                <div className="studentsayingcard-info">
                    <div className="studentsayingcard-logo" style={{backgroundColor:props.color}}>
                        <HiMiniUser color={props.logocolor} size={100} />
                    </div>
                    <div className="studentsayingcard-profile">
                        <p className='vr-bold studentsayingcard-profile-name'>{props.username}</p>
                        <p className='vr-medium studentsayingcard-profile-program'>{props.program}</p>
                    </div>
                    <div className="studentsayingcard-linkedin">
                        <BsLinkedin color="#6D87F5" size={50}/>
                    </div>
                </div>
                <div className="studentsayingcard-review">
                    <p>{props.review}</p>
                </div>
                <div className="studentsayingcard-card-stars">
                    {
                        arr.map((value,key)=>(
                            key<props.rating ?
                            <AiFillStar color="#6D87F5" size={40}/>:
                            <AiOutlineStar color="#6D87F5" size={40}/>
                        ))
                    }
                </div>
        </div>
    );
}
export default StudentSayingCard