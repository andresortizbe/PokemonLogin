import React from 'react';
import './profile.css';
import {LogoutOutline} from '@graywolfai/react-heroicons';

export default function ContextMenu(props) {
  
  
    return (
    
    <div className="contextual-dropdown">
            <div className="contextual-dropdown__row">
                <LogoutOutline />
                <span onClick={props.LogOut}> Log Out </span>
            </div>
        </div>
        )
}