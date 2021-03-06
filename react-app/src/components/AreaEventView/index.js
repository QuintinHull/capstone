import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAreaEvents } from "../../store/event";

import "./AreaEventView.css";

const AreaEventView = ({ singleArea }) => {
  const dispatch = useDispatch();

  const areaEvents = useSelector((state) => state.events.all_area_events);
  const creator = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAreaEvents(singleArea?.id));
  }, [dispatch, singleArea.id]);

  return (
    <div>
      {/* <div className="area_events_title">upcoming events</div> */}
      <div className="area_events_content">
        {areaEvents &&
          Object.values(areaEvents).map((event) => (
            <div className="area_events_card" key={event.id}>
              <div className="area_events_card_title">{event.title}</div>
              <div>{event.description}</div>
                <div>
                  <span className="area_event_span">reported by: </span>
                  {event.first_name} {event.last_name}
                </div>
              <div>
                <div className="area_event_bottom_row">
                  <div>
                    <span className="area_event_span">event date: </span>
                    {event.date_time}
                  </div>
                  {creator && creator.id === event.user_id && 
                    <NavLink
                      className="area_event_link"
                      to={`/event/${event.id}`}
                    >
                      edit
                    </NavLink>
                  }
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AreaEventView;
