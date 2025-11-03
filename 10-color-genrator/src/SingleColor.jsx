import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
    const { hex, weight } = color

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('Color code copied to clipboard');
        } catch (error) {
            toast.error('Failed to copy color code: ', error.message);
        }
    }


    return (
        <div className={index > 10 ? 'color color-light' : 'color'} style={{ background: `#${hex}` }} onClick={() => copyToClipboard(hex)}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </div>
    )
}

export default SingleColor
