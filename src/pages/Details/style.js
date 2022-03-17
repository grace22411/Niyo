import styled from 'styled-components'

export const Details = styled.div`
    padding:20px;
    width:100%;
    display:flex ;
    justify-content:space-between ;
    .image{
        height:50vh;
        width: 30%;
        background-size:cover ;
        background-position:top ;
        border-radius:20px ;
        box-shadow:0 3px 20px rgba(0,0,0,0.2) ;
        position:relative ;
        div{
            bottom:30px;
            position:absolute ;
            text-align:center ;
            width:100%;
        }
        p{
            background-color:#fff ;
            padding:4px 10px;
            border-radius:10px;
            text-align:center ;
            display:inline-block ;
            font-weight:600 ;
            font-size:14px; ;
            margin:10px auto  0 auto;;

           
        }
    }

    .info{
        width:65%;
        padding:10px 0px;
        .location-description{
            .desc{
                margin-bottom:15px; color:#153288;
                opacity:0.48 ;
                i{
                    margin-right:15px;
                    color:#183152;
                }
            }
        }
    }

    @media only screen and (max-width:480px){
     flex-direction:column ;
     padding:10px;
     .image,.info{
         width:100%;
     }
  }

  @media only screen and (min-width:481px) and (max-width:780px){
    flex-direction:column ;
     padding:10px;
     .image,.info{
         width:100%;
     }
  }
`

export const Reviews = styled.div`
    padding:20px ;
    h1{
        font-size:20px; ;
    }
    .each-review{
        width:100%;
        height:auto;
        padding:5px 30px;
        background-color:#f0f0f0 ;
        border:2px solid #fff;
        border-radius:15px; ;
        margin-bottom:20px ;
        span{
            font-weight:600 ;
            color:#153288;
        }
    }

    @media only screen and (max-width:480px){
     padding:20px;
     .each-review{
         p{
             font-size:14px; ;
         }
     }
     
  }
`