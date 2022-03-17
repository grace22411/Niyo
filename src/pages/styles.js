import styled from "styled-components"
import pic from "../assets/oyin.jpg"



export const ContainDashboard = styled.div`
   width:100%;
`

export const Header = styled.div`
display:flex ;
justify-content:space-between ;
   .user{
       width: 35%;
       height:30px;
       display:flex ;
       .user-pic{
           width:50px;
           height:50px;
           border-radius: 100%;
           background-image:url(${pic});
           background-size:cover ;
       }
       .user-info{
           margin-left:15px;
           h1{

            font-size:28px;
           }
           h2{
               font-size:17px;
           }
           h1,h2{
               margin:0;
               span{
                font-family: 'Dancing Script', cursive;
                font-weight:200 ;
               }
           }
       }
   }

   .friends{
       width:67%;
       height:auto;
       display:flex ;
       justify-content:space-between ;
       .friend-pic{
            width:50px;
            height:50px;
            border:2px solid #fff;
            border-radius:100% ;
            background-size:cover ;
       }
   }

   @media only screen and (max-width:1024px){
     .user{
       width:100%;
       .user-info{
         h1{
           font-size:25px; ;
         }
       }
     }
    .friends{
      display:none ;
    }
  }

`
export const SearchSection = styled.div`
    display:flex ;
    padding-top:30px;
    .search{
        width:36%;
        border:1px solid #03030321;
        height:40px;
        border-radius: 20px;
        display:flex ;
        padding:2px 4px 0 0;
       
        input{
            width:78%;
            background-color:transparent;
            height:inherit ;
            border:none ;
            padding-left:20px;
            outline:none ;
            font-family: 'Open Sans', sans-serif;
        }
        .icons{
          margin-left:auto ;
          i{
              color:#fff;
              padding:9px;
              border-radius:100%;
              background-color:#EEB1F0 ;
              margin-left:3px;
          }
        }
        
        ::placeholder{
            color:#03030321;
        }
    }

    .more{
        color:#fff;
            padding:9px 15px;
            border-radius:100%;
            background-color:#EEB1F0 ;
            margin-left:3px;
            font-size:20px;
    }

    @media only screen and (max-width:480px){
      margin-top:20px;
     .search{
       width:100%;
       input{
         width:70%;
         
       }
       i{
         padding:7px;
       }
     }

     .more{
       display: none;
     }
  }

  @media only screen and (min-width:481px) and (max-width:1024px){
      margin-top:20px;
     .search{
       width:90%;
       
     }

     .more{
       display: block;
     }
  }

`

export const DashboardImageOverview = styled.div`

.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 30px;
}
ul {
  display: flex;
  flex-wrap: wrap;
 // justify-content:space-between ;
  padding-left:0 !important;
}

li {
  height: 40vh;
  flex-grow: 1;
  list-style:none ;
  padding:10px;

  position:relative;
  
  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
      cursor: pointer;

    border-radius:20px; ;
  }
 
  
}
.overlay{
    background:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    height:inherit ;;
    width:inherit ;
   z-index:9999;
   //filter:grayscale(1%) ;

 // position:absolute;
    border-radius:20px; ;
  }

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}




@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
`