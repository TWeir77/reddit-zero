import React, { useState } from "react";
import './Post.css';
import moment from "moment";
import shortenNumber from '../../utils/shortenNumber';
import Card from '../../components/Card';



const Post = (props) => {


    return (
        <article key={postMessage.id}>
            <Card>
                <div className='post=wrapper'>
                    <div className='post-votes-container'>
                        <button
                            type="button"
                            className={`icon-action-button up-vote ${voteValue === 1 && 'active'}`}
                        >
                            {renderUpVote()}
                        </button>
                    </div>
                </div>
            </Card>
        </article>
    )
}