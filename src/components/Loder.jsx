import styled from 'styled-components';

const Loader = () => {
  return (
   <div className='w-full h-[100vh] fixed bg-black/50 left-0 top-0 flex justify-center items-center z-30'>
     <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
   </div>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --ballcolor: #000;
    --shadow: 0px 0 #ffffff00;
    --shadowcolor: #ffffff00;
    width: 10px;
    height: 10px;
    left: -120px;
    border-radius: 50%;
    position: relative;
    animation: shadowRolling 2s linear infinite;
  }

  @keyframes shadowRolling {

    0% {
      box-shadow: var(--shadow),
          var(--shadow),
          var(--shadow),
          var(--shadow);
    }

    12% {
      box-shadow: 100px 0 var(--ballcolor),
          var(--shadow),
          var(--shadow), 
          var(--shadow);
    }

    25% {
      box-shadow: 110px 0 var(--ballcolor),
          100px 0 var(--ballcolor),
          var(--shadow), 
          var(--shadow);
    }

    36% {
      box-shadow: 120px 0 var(--ballcolor), 
          110px 0 var(--ballcolor), 
          100px 0 var(--ballcolor), 
           var(--shadow);
    }

    50% {
      box-shadow: 130px 0 var(--ballcolor),
          120px 0 var(--ballcolor),
          110px 0 var(--ballcolor),
          100px 0 var(--ballcolor);
    }

    62% {
      box-shadow: 200px 0 var(--shadowcolor),
           130px 0 var(--ballcolor), 
           120px 0 var(--ballcolor), 
           110px 0 var(--ballcolor);
    }

    75% {
      box-shadow: 200px 0 var(--shadowcolor),
          200px 0 var(--shadowcolor),
          130px 0 var(--ballcolor), 
          120px 0 var(--ballcolor);
    }

    87% {
      box-shadow: 200px 0 var(--shadowcolor), 
          200px 0 var(--shadowcolor), 
          200px 0 var(--shadowcolor), 
          130px 0 var(--ballcolor);
    }

    100% {
      box-shadow: 200px 0 var(--shadowcolor), 
          200px 0 var(--shadowcolor),
          200px 0 var(--shadowcolor),
          200px 0 var(--shadowcolor);
    }
  }`;

export default Loader;

