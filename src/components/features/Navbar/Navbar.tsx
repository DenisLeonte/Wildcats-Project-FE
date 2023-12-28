import { usePageContext } from '../../../contexts/PageContext/PageManager';
import '../../../styles/Navbar.css'

function Navbar(){
    const {page,updatePage} = usePageContext();
    function onLogoClick(){
      if(page != "home"){
        updatePage("home");
        window.location.href = "/#home";
      }
    }

    return(
        <div className="navbar">
        {/* Back icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={"back_icon"}>
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
        </svg>
        {/* LOGO */}
        <a onClick={onLogoClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="167" height="13" viewBox="0 0 167 13" fill="none" className={"logo_icon"}>
            <path d="M157.089 2.13069V0.363647H166.374V2.13069H162.777V12H160.686V2.13069H157.089Z" fill="#004006"/>
            <path d="M153.534 3.56248C153.481 3.06627 153.258 2.67991 152.864 2.40339C152.473 2.12688 151.966 1.98862 151.341 1.98862C150.902 1.98862 150.525 2.05491 150.21 2.18748C149.896 2.32006 149.655 2.49998 149.489 2.72726C149.322 2.95453 149.237 3.214 149.233 3.50567C149.233 3.74809 149.288 3.95832 149.398 4.13635C149.511 4.31438 149.665 4.46589 149.858 4.59089C150.051 4.7121 150.265 4.81438 150.5 4.89771C150.735 4.98104 150.972 5.05112 151.21 5.10794L152.301 5.38067C152.741 5.48294 153.163 5.6212 153.568 5.79544C153.977 5.96968 154.343 6.18938 154.665 6.45453C154.991 6.71968 155.248 7.03976 155.438 7.41476C155.627 7.78976 155.722 8.22915 155.722 8.73294C155.722 9.41476 155.547 10.0151 155.199 10.5341C154.85 11.0492 154.347 11.4526 153.688 11.7443C153.032 12.0322 152.239 12.1761 151.307 12.1761C150.402 12.1761 149.616 12.036 148.949 11.7557C148.286 11.4754 147.767 11.0663 147.392 10.5284C147.021 9.99051 146.82 9.33521 146.79 8.56248H148.864C148.894 8.96779 149.019 9.30491 149.239 9.57385C149.458 9.84279 149.744 10.0435 150.097 10.1761C150.453 10.3087 150.85 10.375 151.29 10.375C151.748 10.375 152.15 10.3068 152.494 10.1704C152.843 10.0303 153.116 9.8371 153.313 9.59089C153.509 9.34089 153.61 9.04923 153.614 8.71589C153.61 8.41286 153.521 8.16286 153.347 7.96589C153.172 7.76514 152.928 7.59847 152.614 7.46589C152.303 7.32953 151.939 7.20832 151.523 7.10226L150.199 6.76135C149.241 6.51514 148.483 6.14203 147.926 5.64203C147.373 5.13824 147.097 4.46968 147.097 3.63635C147.097 2.95074 147.282 2.35036 147.653 1.83521C148.028 1.32006 148.538 0.920438 149.182 0.636347C149.826 0.348468 150.555 0.204529 151.369 0.204529C152.195 0.204529 152.919 0.348468 153.54 0.636347C154.165 0.920438 154.655 1.31627 155.011 1.82385C155.367 2.32763 155.551 2.90718 155.563 3.56248H153.534Z" fill="#004006"/>
            <path d="M142.811 0.363647H144.919V7.96592C144.919 8.79925 144.722 9.53221 144.328 10.1648C143.938 10.7974 143.389 11.2917 142.68 11.6477C141.972 12 141.144 12.1761 140.197 12.1761C139.247 12.1761 138.417 12 137.709 11.6477C137 11.2917 136.451 10.7974 136.061 10.1648C135.671 9.53221 135.476 8.79925 135.476 7.96592V0.363647H137.584V7.78978C137.584 8.27463 137.69 8.70645 137.902 9.08524C138.118 9.46403 138.421 9.76138 138.811 9.97728C139.201 10.1894 139.663 10.2955 140.197 10.2955C140.732 10.2955 141.194 10.1894 141.584 9.97728C141.978 9.76138 142.281 9.46403 142.493 9.08524C142.705 8.70645 142.811 8.27463 142.811 7.78978V0.363647Z" fill="#004006"/>
            <path d="M126.413 12V0.363647H128.521V10.233H133.646V12H126.413Z" fill="#004006"/>
            <path d="M116.007 12V0.363647H120.371C121.265 0.363647 122.015 0.51895 122.621 0.829556C123.231 1.14016 123.691 1.57577 124.001 2.13637C124.316 2.69319 124.473 3.34281 124.473 4.08524C124.473 4.83145 124.314 5.47918 123.996 6.02842C123.681 6.57387 123.217 6.99622 122.604 7.29547C121.99 7.59092 121.236 7.73865 120.342 7.73865H117.234V5.98865H120.058C120.581 5.98865 121.009 5.91668 121.342 5.77274C121.676 5.62501 121.922 5.411 122.081 5.13069C122.244 4.8466 122.325 4.49812 122.325 4.08524C122.325 3.67236 122.244 3.32009 122.081 3.02842C121.918 2.73297 121.67 2.50948 121.337 2.35797C121.003 2.20266 120.573 2.12501 120.047 2.12501H118.115V12H116.007ZM122.018 6.72728L124.899 12H122.547L119.717 6.72728H122.018Z" fill="#004006"/>
            <path d="M106.288 12V0.363647H113.857V2.13069H108.396V5.28978H113.464V7.05683H108.396V10.233H113.902V12H106.288Z" fill="#004006"/>
            <path d="M98.6378 12H94.6946V0.363647H98.7173C99.8726 0.363647 100.865 0.596602 101.695 1.06251C102.528 1.52463 103.168 2.1894 103.615 3.05683C104.062 3.92425 104.285 4.96213 104.285 6.17047C104.285 7.38259 104.06 8.42425 103.609 9.29547C103.162 10.1667 102.517 10.8352 101.672 11.3011C100.831 11.7671 99.8196 12 98.6378 12ZM96.8025 10.1761H98.5355C99.3461 10.1761 100.022 10.0284 100.564 9.73297C101.106 9.43372 101.513 8.98865 101.785 8.39774C102.058 7.80304 102.195 7.06062 102.195 6.17047C102.195 5.28031 102.058 4.54168 101.785 3.95456C101.513 3.36365 101.109 2.92236 100.575 2.63069C100.045 2.33524 99.3859 2.18751 98.598 2.18751H96.8025V10.1761Z" fill="#004006"/>
            <path d="M92.3977 0.363647V12H90.5227L85.0397 4.07387H84.9432V12H82.8352V0.363647H84.7216L90.1988 8.29547H90.3011V0.363647H92.3977Z" fill="#004006"/>
            <path d="M72.7513 12H70.5013L74.5979 0.363647H77.2002L81.3025 12H79.0525L75.9445 2.75001H75.8536L72.7513 12ZM72.8252 7.43751H78.9616V9.13069H72.8252V7.43751Z" fill="#004006"/>
            <path d="M58.6903 12L55.4062 0.363647H57.6733L59.7699 8.91478H59.8778L62.1165 0.363647H64.179L66.4233 8.92047H66.5256L68.6222 0.363647H70.8892L67.6051 12H65.5256L63.196 3.83524H63.1051L60.7699 12H58.6903Z" fill="#004006"/>
            <path d="M53.9446 0.363647V12H52.0696L46.5866 4.07387H46.49V12H44.3821V0.363647H46.2684L51.7457 8.29547H51.848V0.363647H53.9446Z" fill="#004006"/>
            <path d="M34.2982 12H32.0482L36.1448 0.363647H38.7471L42.8494 12H40.5994L37.4914 2.75001H37.4005L34.2982 12ZM34.3721 7.43751H40.5084V9.13069H34.3721V7.43751Z" fill="#004006"/>
            <path d="M22.2883 12V0.363647H26.7429C27.5838 0.363647 28.2826 0.496223 28.8395 0.761374C29.4001 1.02274 29.8186 1.38069 30.0951 1.83524C30.3755 2.28978 30.5156 2.80494 30.5156 3.38069C30.5156 3.85418 30.4247 4.25948 30.2429 4.5966C30.0611 4.92994 29.8167 5.20077 29.5099 5.4091C29.2031 5.61743 28.8603 5.76706 28.4815 5.85797V5.9716C28.8944 5.99433 29.2902 6.12122 29.669 6.35228C30.0516 6.57956 30.3641 6.90153 30.6065 7.31819C30.8489 7.73486 30.9701 8.23865 30.9701 8.82956C30.9701 9.43183 30.8243 9.9735 30.5326 10.4546C30.241 10.9318 29.8016 11.3087 29.2145 11.5852C28.6273 11.8618 27.8887 12 26.9986 12H22.2883ZM24.3963 10.2386H26.6633C27.4285 10.2386 27.9796 10.0928 28.3167 9.80115C28.6576 9.50569 28.8281 9.1269 28.8281 8.66478C28.8281 8.32009 28.7429 8.00948 28.5724 7.73297C28.402 7.45266 28.1595 7.23297 27.8451 7.07388C27.5308 6.911 27.1558 6.82956 26.7201 6.82956H24.3963V10.2386ZM24.3963 5.31251H26.4815C26.8451 5.31251 27.1728 5.24622 27.4645 5.11365C27.7561 4.97728 27.9853 4.786 28.152 4.53978C28.3224 4.28978 28.4076 3.99433 28.4076 3.65342C28.4076 3.20266 28.2486 2.83145 27.9304 2.53978C27.616 2.24812 27.1482 2.10228 26.527 2.10228H24.3963V5.31251Z" fill="#004006"/>
            <path d="M11.8821 12V0.363647H16.2457C17.1397 0.363647 17.8897 0.51895 18.4957 0.829556C19.1056 1.14016 19.5658 1.57577 19.8764 2.13637C20.1908 2.69319 20.348 3.34281 20.348 4.08524C20.348 4.83145 20.1889 5.47918 19.8707 6.02842C19.5563 6.57387 19.0923 6.99622 18.4787 7.29547C17.865 7.59092 17.1112 7.73865 16.2173 7.73865H13.1094V5.98865H15.9332C16.4559 5.98865 16.884 5.91668 17.2173 5.77274C17.5506 5.62501 17.7969 5.411 17.9559 5.13069C18.1188 4.8466 18.2003 4.49812 18.2003 4.08524C18.2003 3.67236 18.1188 3.32009 17.9559 3.02842C17.7931 2.73297 17.545 2.50948 17.2116 2.35797C16.8783 2.20266 16.4484 2.12501 15.9219 2.12501H13.99V12H11.8821ZM17.8934 6.72728L20.7741 12H18.4219L15.5923 6.72728H17.8934Z" fill="#004006"/>
            <path d="M7.48293 0.363647H9.59089V7.96592C9.59089 8.79925 9.39392 9.53221 8.99998 10.1648C8.60983 10.7974 8.06058 11.2917 7.35225 11.6477C6.64392 12 5.81627 12.1761 4.8693 12.1761C3.91854 12.1761 3.08899 12 2.38066 11.6477C1.67233 11.2917 1.12308 10.7974 0.732932 10.1648C0.342781 9.53221 0.147705 8.79925 0.147705 7.96592V0.363647H2.25566V7.78978C2.25566 8.27463 2.36172 8.70645 2.57384 9.08524C2.78975 9.46403 3.09278 9.76138 3.48293 9.97728C3.87308 10.1894 4.33521 10.2955 4.8693 10.2955C5.40339 10.2955 5.86551 10.1894 6.25566 9.97728C6.6496 9.76138 6.95263 9.46403 7.16475 9.08524C7.37687 8.70645 7.48293 8.27463 7.48293 7.78978V0.363647Z" fill="#004006"/>
          </svg>
        </a>
        {/* CONTACT */}
        <a>
          <div className="nav_button">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="13" viewBox="0 0 61 13" fill="none">
            <path d="M60.4375 3.58243V5.17333H55.4204V3.58243H60.4375ZM56.659 1.49152H58.7159V9.6847C58.7159 9.96121 58.7575 10.1733 58.8409 10.3211C58.928 10.465 59.0416 10.5635 59.1818 10.6165C59.3219 10.6695 59.4772 10.6961 59.6477 10.6961C59.7765 10.6961 59.8939 10.6866 60 10.6677C60.1098 10.6487 60.1931 10.6317 60.25 10.6165L60.5965 12.2245C60.4867 12.2624 60.3295 12.304 60.125 12.3495C59.9242 12.3949 59.678 12.4214 59.3863 12.429C58.8712 12.4442 58.4072 12.3665 57.9943 12.1961C57.5814 12.0218 57.2537 11.7529 57.0113 11.3892C56.7727 11.0256 56.6553 10.5711 56.659 10.0256V1.49152Z" fill="#2C5730"/>
            <path d="M50.652 12.4801C49.7808 12.4801 49.0327 12.2888 48.4077 11.9062C47.7865 11.5237 47.3073 10.9953 46.9702 10.321C46.6369 9.64299 46.4702 8.86269 46.4702 7.98011C46.4702 7.09375 46.6407 6.31155 46.9816 5.63352C47.3225 4.9517 47.8035 4.4214 48.4248 4.04261C49.0498 3.66004 49.7884 3.46875 50.6407 3.46875C51.349 3.46875 51.9759 3.59943 52.5214 3.8608C53.0706 4.11837 53.5081 4.4839 53.8339 4.95739C54.1596 5.42708 54.3452 5.97633 54.3907 6.60511H52.4248C52.3452 6.18466 52.1558 5.83428 51.8566 5.55398C51.5611 5.26989 51.1653 5.12784 50.6691 5.12784C50.2486 5.12784 49.8793 5.24148 49.5611 5.46875C49.2429 5.69223 48.9948 6.0142 48.8168 6.43466C48.6426 6.85511 48.5554 7.3589 48.5554 7.94602C48.5554 8.54072 48.6426 9.05208 48.8168 9.48011C48.991 9.90436 49.2354 10.232 49.5498 10.4631C49.8679 10.6903 50.241 10.804 50.6691 10.804C50.9721 10.804 51.2429 10.7472 51.4816 10.6335C51.724 10.5161 51.9267 10.3475 52.0895 10.1278C52.2524 9.90814 52.3642 9.6411 52.4248 9.3267H54.3907C54.3414 9.94413 54.1596 10.4915 53.8452 10.9688C53.5308 11.4422 53.1028 11.8134 52.5611 12.0824C52.0195 12.3475 51.3831 12.4801 50.652 12.4801Z" fill="#2C5730"/>
            <path d="M40.169 12.4858C39.616 12.4858 39.1179 12.3873 38.6747 12.1903C38.2353 11.9896 37.8868 11.6941 37.6292 11.304C37.3754 10.9138 37.2485 10.4328 37.2485 9.8608C37.2485 9.36837 37.3394 8.96117 37.5213 8.6392C37.7031 8.31723 37.9512 8.05966 38.2656 7.86648C38.58 7.6733 38.9341 7.52746 39.3281 7.42898C39.7258 7.3267 40.1368 7.25284 40.561 7.20739C41.0724 7.15436 41.4872 7.10701 41.8054 7.06534C42.1235 7.01989 42.3546 6.9517 42.4985 6.8608C42.6463 6.7661 42.7201 6.62026 42.7201 6.4233V6.3892C42.7201 5.96117 42.5932 5.62973 42.3394 5.39489C42.0857 5.16004 41.7201 5.04261 41.2429 5.04261C40.7391 5.04261 40.3394 5.15246 40.044 5.37216C39.7523 5.59186 39.5554 5.85133 39.4531 6.15057L37.5326 5.87784C37.6841 5.34754 37.9341 4.90436 38.2826 4.5483C38.6311 4.18845 39.0572 3.91951 39.561 3.74148C40.0648 3.55966 40.6216 3.46875 41.2315 3.46875C41.6519 3.46875 42.0705 3.51799 42.4872 3.61648C42.9038 3.71496 43.2845 3.87784 43.6292 4.10511C43.9739 4.3286 44.2504 4.63352 44.4588 5.01989C44.6709 5.40625 44.7769 5.8892 44.7769 6.46875V12.3097H42.7997V11.1108H42.7315C42.6065 11.3532 42.4304 11.5805 42.2031 11.7926C41.9796 12.0009 41.6974 12.1695 41.3565 12.2983C41.0194 12.4233 40.6235 12.4858 40.169 12.4858ZM40.7031 10.9744C41.116 10.9744 41.4739 10.893 41.7769 10.7301C42.08 10.5634 42.3129 10.3438 42.4758 10.071C42.6425 9.7983 42.7258 9.50095 42.7258 9.17898V8.15057C42.6614 8.2036 42.5516 8.25284 42.3963 8.2983C42.2447 8.34375 42.0743 8.38352 41.8849 8.41761C41.6955 8.4517 41.508 8.48201 41.3224 8.50852C41.1368 8.53504 40.9758 8.55776 40.8394 8.5767C40.5326 8.61837 40.258 8.68655 40.0156 8.78125C39.7732 8.87595 39.5819 9.00852 39.4417 9.17898C39.3016 9.34564 39.2315 9.56155 39.2315 9.8267C39.2315 10.2055 39.3697 10.4915 39.6463 10.6847C39.9228 10.8778 40.275 10.9744 40.7031 10.9744Z" fill="#2C5730"/>
            <path d="M35.9375 3.58243V5.17333H30.9204V3.58243H35.9375ZM32.159 1.49152H34.2159V9.6847C34.2159 9.96121 34.2575 10.1733 34.3409 10.3211C34.428 10.465 34.5416 10.5635 34.6818 10.6165C34.8219 10.6695 34.9772 10.6961 35.1477 10.6961C35.2765 10.6961 35.3939 10.6866 35.5 10.6677C35.6098 10.6487 35.6931 10.6317 35.75 10.6165L36.0965 12.2245C35.9867 12.2624 35.8295 12.304 35.625 12.3495C35.4242 12.3949 35.178 12.4214 34.8863 12.429C34.3712 12.4442 33.9072 12.3665 33.4943 12.1961C33.0814 12.0218 32.7537 11.7529 32.5113 11.3892C32.2727 11.0256 32.1553 10.5711 32.159 10.0256V1.49152Z" fill="#2C5730"/>
            <path d="M23.8864 7.19602V12.3097H21.8296V3.58239H23.7955V5.06534H23.8978C24.0985 4.5767 24.4186 4.18845 24.858 3.90057C25.3012 3.61269 25.8485 3.46875 26.5 3.46875C27.1023 3.46875 27.6269 3.59754 28.0739 3.85511C28.5247 4.11269 28.8732 4.4858 29.1194 4.97443C29.3694 5.46307 29.4925 6.05587 29.4887 6.75284V12.3097H27.4319V7.07102C27.4319 6.48769 27.2803 6.03125 26.9773 5.7017C26.6781 5.37216 26.2633 5.20739 25.733 5.20739C25.3732 5.20739 25.0531 5.28693 24.7728 5.44602C24.4963 5.60133 24.2785 5.8267 24.1194 6.12216C23.9641 6.41761 23.8864 6.77557 23.8864 7.19602Z" fill="#2C5730"/>
            <path d="M15.902 12.4801C15.0498 12.4801 14.3111 12.2926 13.6861 11.9176C13.0611 11.5426 12.5763 11.018 12.2316 10.3438C11.8907 9.66951 11.7202 8.88163 11.7202 7.98011C11.7202 7.0786 11.8907 6.28883 12.2316 5.6108C12.5763 4.93276 13.0611 4.40625 13.6861 4.03125C14.3111 3.65625 15.0498 3.46875 15.902 3.46875C16.7543 3.46875 17.4929 3.65625 18.1179 4.03125C18.7429 4.40625 19.2259 4.93276 19.5668 5.6108C19.9115 6.28883 20.0839 7.0786 20.0839 7.98011C20.0839 8.88163 19.9115 9.66951 19.5668 10.3438C19.2259 11.018 18.7429 11.5426 18.1179 11.9176C17.4929 12.2926 16.7543 12.4801 15.902 12.4801ZM15.9134 10.8324C16.3755 10.8324 16.7619 10.7055 17.0725 10.4517C17.3831 10.1941 17.6142 9.84943 17.7657 9.41761C17.921 8.9858 17.9986 8.50473 17.9986 7.97443C17.9986 7.44034 17.921 6.95739 17.7657 6.52557C17.6142 6.08996 17.3831 5.74337 17.0725 5.4858C16.7619 5.22822 16.3755 5.09943 15.9134 5.09943C15.4399 5.09943 15.046 5.22822 14.7316 5.4858C14.421 5.74337 14.188 6.08996 14.0327 6.52557C13.8812 6.95739 13.8054 7.44034 13.8054 7.97443C13.8054 8.50473 13.8812 8.9858 14.0327 9.41761C14.188 9.84943 14.421 10.1941 14.7316 10.4517C15.046 10.7055 15.4399 10.8324 15.9134 10.8324Z" fill="#2C5730"/>
            <path d="M10.2557 4.59945H8.13068C8.07008 4.25096 7.95833 3.94225 7.79545 3.67331C7.63258 3.40058 7.42992 3.16952 7.1875 2.98013C6.94508 2.79074 6.66856 2.64869 6.35795 2.55399C6.05114 2.45551 5.7197 2.40627 5.36364 2.40627C4.73106 2.40627 4.17045 2.56536 3.68182 2.88354C3.19318 3.19793 2.81061 3.66005 2.53409 4.2699C2.25758 4.87596 2.11932 5.61649 2.11932 6.49149C2.11932 7.38165 2.25758 8.13165 2.53409 8.74149C2.81439 9.34756 3.19697 9.80589 3.68182 10.1165C4.17045 10.4233 4.72917 10.5767 5.35795 10.5767C5.70644 10.5767 6.0322 10.5313 6.33523 10.4404C6.64205 10.3457 6.91667 10.2074 7.15909 10.0256C7.4053 9.84377 7.61174 9.62028 7.77841 9.35513C7.94886 9.08998 8.06629 8.78695 8.13068 8.44604L10.2557 8.4574C10.1761 9.01043 10.0038 9.52937 9.73864 10.0142C9.47727 10.4991 9.13447 10.9271 8.71023 11.2983C8.28598 11.6657 7.78977 11.9536 7.22159 12.1619C6.65341 12.3665 6.02273 12.4688 5.32955 12.4688C4.30682 12.4688 3.39394 12.232 2.59091 11.7585C1.78788 11.2851 1.1553 10.6013 0.693182 9.7074C0.231061 8.81346 0 7.74149 0 6.49149C0 5.23771 0.232955 4.16574 0.698864 3.27559C1.16477 2.38165 1.79924 1.69793 2.60227 1.22445C3.4053 0.750964 4.31439 0.514221 5.32955 0.514221C5.97727 0.514221 6.57955 0.60513 7.13636 0.786948C7.69318 0.968767 8.18939 1.23581 8.625 1.58809C9.06061 1.93657 9.41856 2.3646 9.69886 2.87218C9.98295 3.37596 10.1686 3.95172 10.2557 4.59945Z" fill="#2C5730"/>
            </svg>
          </div>
        </a>
        {/* ABOUT US */}
        <a>
          <div className="nav_button">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="13" viewBox="0 0 70 13" fill="none">
              <path d="M69.0653 5.81254L67.1903 6.01709C67.1373 5.8277 67.0445 5.64967 66.9119 5.483C66.7831 5.31633 66.6089 5.18186 66.3892 5.07959C66.1695 4.97732 65.9006 4.92618 65.5824 4.92618C65.1544 4.92618 64.7945 5.01898 64.5028 5.20459C64.215 5.3902 64.0729 5.63073 64.0767 5.92618C64.0729 6.17997 64.1657 6.38641 64.3551 6.5455C64.5483 6.70459 64.8665 6.83527 65.3097 6.93754L66.7983 7.25573C67.6241 7.43376 68.2377 7.71595 68.6392 8.10232C69.0445 8.48868 69.2491 8.99436 69.2528 9.61936C69.2491 10.1686 69.0881 10.6535 68.7699 11.0739C68.4555 11.4906 68.018 11.8163 67.4574 12.0512C66.8968 12.286 66.2528 12.4035 65.5256 12.4035C64.4574 12.4035 63.5975 12.18 62.946 11.733C62.2945 11.2822 61.9062 10.6553 61.7812 9.85232L63.7869 9.65913C63.8778 10.0531 64.071 10.3504 64.3665 10.5512C64.6619 10.7519 65.0464 10.8523 65.5199 10.8523C66.0085 10.8523 66.4006 10.7519 66.696 10.5512C66.9953 10.3504 67.1449 10.1023 67.1449 9.80686C67.1449 9.55686 67.0483 9.35042 66.8551 9.18754C66.6657 9.02467 66.3703 8.89967 65.9688 8.81254L64.4801 8.50004C63.643 8.3258 63.0237 8.03224 62.6222 7.61936C62.2206 7.2027 62.0218 6.67618 62.0256 6.03982C62.0218 5.50194 62.1676 5.03603 62.4631 4.64209C62.7623 4.24436 63.1771 3.93754 63.7074 3.72163C64.2415 3.50194 64.857 3.39209 65.554 3.39209C66.5767 3.39209 67.3816 3.60989 67.9688 4.0455C68.5597 4.4811 68.9252 5.07012 69.0653 5.81254Z" fill="#004006"/>
              <path d="M57.9956 8.56256V3.50574H60.0524V12.233H58.0581V10.6819H57.9672C57.7702 11.1705 57.4464 11.5701 56.9956 11.8807C56.5486 12.1913 55.9975 12.3466 55.3422 12.3466C54.7702 12.3466 54.2645 12.2198 53.8251 11.966C53.3895 11.7084 53.0486 11.3353 52.8024 10.8466C52.5562 10.3542 52.4331 9.75953 52.4331 9.06256V3.50574H54.4899V8.74437C54.4899 9.2974 54.6414 9.7368 54.9445 10.0626C55.2475 10.3883 55.6452 10.5512 56.1376 10.5512C56.4407 10.5512 56.7342 10.4773 57.0183 10.3296C57.3024 10.1819 57.5354 9.96218 57.7172 9.67051C57.9028 9.37506 57.9956 9.00574 57.9956 8.56256Z" fill="#004006"/>
              <path d="M46.7443 3.5057V5.09661H41.7273V3.5057H46.7443ZM42.9659 1.41479H45.0228V9.60798C45.0228 9.88449 45.0644 10.0966 45.1478 10.2443C45.2349 10.3883 45.3485 10.4868 45.4887 10.5398C45.6288 10.5928 45.7841 10.6193 45.9546 10.6193C46.0834 10.6193 46.2008 10.6099 46.3068 10.5909C46.4167 10.572 46.5 10.5549 46.5568 10.5398L46.9034 12.1477C46.7936 12.1856 46.6364 12.2273 46.4318 12.2727C46.2311 12.3182 45.9849 12.3447 45.6932 12.3523C45.1781 12.3674 44.714 12.2898 44.3012 12.1193C43.8883 11.9451 43.5606 11.6762 43.3182 11.3125C43.0796 10.9489 42.9621 10.4943 42.9659 9.94889V1.41479Z" fill="#004006"/>
              <path d="M38.2144 8.56256V3.50574H40.2712V12.233H38.2769V10.6819H38.1859C37.989 11.1705 37.6651 11.5701 37.2144 11.8807C36.7674 12.1913 36.2162 12.3466 35.5609 12.3466C34.989 12.3466 34.4833 12.2198 34.0439 11.966C33.6083 11.7084 33.2674 11.3353 33.0212 10.8466C32.775 10.3542 32.6519 9.75953 32.6519 9.06256V3.50574H34.7087V8.74437C34.7087 9.2974 34.8602 9.7368 35.1632 10.0626C35.4662 10.3883 35.864 10.5512 36.3564 10.5512C36.6594 10.5512 36.953 10.4773 37.2371 10.3296C37.5212 10.1819 37.7541 9.96218 37.9359 9.67051C38.1215 9.37506 38.2144 9.00574 38.2144 8.56256Z" fill="#004006"/>
              <path d="M26.7244 12.4035C25.8721 12.4035 25.1335 12.216 24.5085 11.841C23.8835 11.466 23.3987 10.9413 23.054 10.2671C22.7131 9.59285 22.5426 8.80497 22.5426 7.90345C22.5426 7.00194 22.7131 6.21217 23.054 5.53413C23.3987 4.8561 23.8835 4.32959 24.5085 3.95459C25.1335 3.57959 25.8721 3.39209 26.7244 3.39209C27.5767 3.39209 28.3153 3.57959 28.9403 3.95459C29.5653 4.32959 30.0483 4.8561 30.3892 5.53413C30.7339 6.21217 30.9062 7.00194 30.9062 7.90345C30.9062 8.80497 30.7339 9.59285 30.3892 10.2671C30.0483 10.9413 29.5653 11.466 28.9403 11.841C28.3153 12.216 27.5767 12.4035 26.7244 12.4035ZM26.7358 10.7557C27.1979 10.7557 27.5843 10.6288 27.8949 10.375C28.2055 10.1175 28.4365 9.77277 28.5881 9.34095C28.7434 8.90913 28.821 8.42807 28.821 7.89777C28.821 7.36368 28.7434 6.88073 28.5881 6.44891C28.4365 6.0133 28.2055 5.66671 27.8949 5.40913C27.5843 5.15156 27.1979 5.02277 26.7358 5.02277C26.2623 5.02277 25.8684 5.15156 25.554 5.40913C25.2434 5.66671 25.0104 6.0133 24.8551 6.44891C24.7036 6.88073 24.6278 7.36368 24.6278 7.89777C24.6278 8.42807 24.7036 8.90913 24.8551 9.34095C25.0104 9.77277 25.2434 10.1175 25.554 10.375C25.8684 10.6288 26.2623 10.7557 26.7358 10.7557Z" fill="#004006"/>
              <path d="M12.9304 12.233V0.596619H14.9872V4.94889H15.0725C15.1785 4.73677 15.3281 4.51139 15.5213 4.27276C15.7145 4.03033 15.9759 3.82389 16.3054 3.65344C16.635 3.47919 17.0554 3.39207 17.5668 3.39207C18.241 3.39207 18.849 3.56442 19.3906 3.90912C19.9361 4.25003 20.3679 4.75571 20.6861 5.42616C21.0081 6.09283 21.1691 6.91101 21.1691 7.88071C21.1691 8.83904 21.0119 9.65344 20.6975 10.3239C20.3831 10.9943 19.955 11.5057 19.4134 11.858C18.8717 12.2103 18.2581 12.3864 17.5725 12.3864C17.0725 12.3864 16.6577 12.3031 16.3281 12.1364C15.9986 11.9697 15.7335 11.769 15.5327 11.5341C15.3357 11.2955 15.1823 11.0701 15.0725 10.858H14.9531V12.233H12.9304ZM14.9475 7.86935C14.9475 8.43374 15.027 8.92806 15.1861 9.3523C15.349 9.77654 15.5819 10.108 15.885 10.3466C16.1918 10.5815 16.563 10.6989 16.9986 10.6989C17.4531 10.6989 17.8338 10.5777 18.1406 10.3353C18.4475 10.089 18.6785 9.75382 18.8338 9.32957C18.9929 8.90154 19.0725 8.4148 19.0725 7.86935C19.0725 7.32768 18.9948 6.84662 18.8395 6.42616C18.6842 6.00571 18.4531 5.67616 18.1463 5.43753C17.8395 5.19889 17.4569 5.07957 16.9986 5.07957C16.5592 5.07957 16.1861 5.1951 15.8793 5.42616C15.5725 5.65723 15.3395 5.98109 15.1804 6.39775C15.0251 6.81442 14.9475 7.30495 14.9475 7.86935Z" fill="#004006"/>
              <path d="M2.84656 12.233H0.596558L4.69315 0.596619H7.29542L11.3977 12.233H9.14769L6.03974 2.98298H5.94883L2.84656 12.233ZM2.92042 7.67048H9.05679V9.36366H2.92042V7.67048Z" fill="#004006"/>
            </svg>
          </div>
        </a>
        {/* SEARCH BAR */}
        <input type='text' placeholder='Search' className="search_bar"></input>
        {/* SIGN IN */}
        <a>
          <div className="nav_button sign_in_but">Sign In</div>
        </a>
        {/* SIGN UP */}
        <a>
          <div className="nav_button sign_up_but">Sign Up</div>
        </a>
      </div>
    )
}

export default Navbar;