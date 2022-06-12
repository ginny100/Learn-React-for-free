import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image" style={{"background-image":`url(${props.item.imageUrl})`}}></div>
            <div className="card--info">
                <div className="card--location">
                    <div className="card--icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <p className="card--country">{props.item.location.toUpperCase()}</p>
                    <a className="card--url" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <h4 className="card--date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}