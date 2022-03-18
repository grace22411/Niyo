import React from "react";
import { DashImages, Friends } from "../helpers/Data";

import {
  ContainDashboard,
  DashboardImageOverview,
  Header,
  SearchSection,
} from "./styles";
import { Link } from "react-router-dom";

const breakpointColumnsObj = {
  default: 5,
  1100: 2,
  700: 2,
  500: 1,
};
const Dashboard = () => {
  return (
    <ContainDashboard>
      <Header>
        <div className="user">
          <div className="user-pic"></div>

          <div className="user-info">
            <h2>
              Hi <span>Oyin,</span>
            </h2>
            <h1>Welcome back!</h1>
          </div>
        </div>

        <div className="friends">
          {Friends.map((item, index) => {
            return (
              <div
                className="friend-pic" key={index}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            );
          })}
        </div>
      </Header>

      <SearchSection>
        <div className="search">
          <input placeholder="Search images and videos" type="text" />
          <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-search"></i>
          </div>
        </div>
        <i class="fas fa-ellipsis-v more"></i>
      </SearchSection>

      <DashboardImageOverview>
        {/* <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {DashImages.map((item) => {
            return(
              <li>
                <img src={item.image} alt={item.name} />
                </li>
            )
             
          })}
        </Masonry> */}
        <ul>
              {DashImages.map((item) => {
                return (
                  <>
                  <Link to={`/dashboard/${item.id}`}>
                <li key={item.id}>
                  
                    <img src={item.image} alt={item.name}/>
                    
                </li>
                </Link>
                <div className="overlay"></div>
                </>
                );
              })}
              
          </ul>
      </DashboardImageOverview>
    </ContainDashboard>
  );
};

export default Dashboard;
