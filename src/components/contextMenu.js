import React from 'react';
import './profile.css';
import {LogoutOutline} from '@graywolfai/react-heroicons';
import firebase  from "../firebase/config";
export default function ContextMenu(props) {
  
    
    return (
    <div className="contextual-dropdown">
            <div className="contextual-dropdown__row">
                <LogoutOutline />
                <span >Log Out</span>
            </div>
        </div>
        )
}