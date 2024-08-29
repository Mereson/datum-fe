import PropTypes from "prop-types"
const TeachersIcon = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00004 9.33301C10.2092 9.33301 12 7.54215 12 5.33301C12 3.12387 10.2092 1.33301 8.00004 1.33301C5.7909 1.33301 4.00004 3.12387 4.00004 5.33301C4.00004 7.54215 5.7909 9.33301 8.00004 9.33301ZM10.6667 5.33301C10.6667 6.80577 9.4728 7.99967 8.00004 7.99967C6.52728 7.99967 5.33337 6.80577 5.33337 5.33301C5.33337 3.86025 6.52728 2.66634 8.00004 2.66634C9.4728 2.66634 10.6667 3.86025 10.6667 5.33301ZM4.66671 12.333C4.66671 12.3311 4.66673 12.3193 4.67787 12.2944C4.68969 12.268 4.71449 12.2262 4.76407 12.1723C4.86604 12.0615 5.04888 11.9256 5.33822 11.7941C5.91572 11.5315 6.81552 11.333 8.00004 11.333C9.18457 11.333 10.0844 11.5315 10.6619 11.7941C10.9512 11.9256 11.134 12.0615 11.236 12.1723C11.2856 12.2262 11.3104 12.268 11.3222 12.2944C11.3334 12.3193 11.3334 12.3311 11.3334 12.333L11.3334 13.6351V13.915V13.9793V13.9947V13.9984V13.9994V13.9996V13.9997V13.9997C11.3334 14.3679 11.6319 14.6663 12 14.6663C12.3682 14.6663 12.6667 14.3679 12.6667 13.9997V13.9997V13.9996V13.9994V13.9984V13.9947V13.9793V13.915L12.6667 13.6351V12.333C12.6667 11.4985 11.9528 10.9163 11.2137 10.5803C10.4163 10.2178 9.3161 9.99967 8.00004 9.99967C6.68399 9.99967 5.58379 10.2178 4.78643 10.5803C4.04728 10.9163 3.33337 11.4985 3.33337 12.333V12.3379V12.3428V12.3477V12.3525V12.3574V12.3623V12.3672V12.3721V12.3769V12.3818V12.3867V12.3916V12.3965V12.4014V12.4062V12.4111V12.416V12.4209V12.4257V12.4306V12.4355V12.4404V12.4452V12.4501V12.455V12.4599V12.4647V12.4696V12.4745V12.4793V12.4842V12.4891V12.4939V12.4988V12.5036V12.5085V12.5134V12.5182V12.5231V12.5279V12.5328V12.5376V12.5425V12.5473V12.5522V12.557V12.5619V12.5667V12.5715V12.5764V12.5812V12.586V12.5909V12.5957V12.6005V12.6054V12.6102V12.615V12.6198V12.6246V12.6295V12.6343V12.6391V12.6439V12.6487V12.6535V12.6583V12.6631V12.6679V12.6727V12.6775V12.6823V12.687V12.6918V12.6966V12.7014V12.7062V12.7109V12.7157V12.7205V12.7252V12.73V12.7347V12.7395V12.7442V12.749V12.7537V12.7585V12.7632V12.7679V12.7727V12.7774V12.7821V12.7868V12.7916V12.7963V12.801V12.8057V12.8104V12.8151V12.8198V12.8245V12.8292V12.8338V12.8385V12.8432V12.8479V12.8525V12.8572V12.8619V12.8665V12.8712V12.8758V12.8805V12.8851V12.8897V12.8944V12.899V12.9036V12.9082V12.9128V12.9174V12.922V12.9266V12.9312V12.9358V12.9404V12.945V12.9496V12.9541V12.9587V12.9633V12.9678V12.9724V12.9769V12.9815V12.986V12.9905V12.995V12.9996V13.0041V13.0086V13.0131V13.0176V13.0221V13.0266V13.0311V13.0355V13.04V13.0445V13.0489V13.0534V13.0578V13.0623V13.0667V13.0712V13.0756V13.08V13.0844V13.0888V13.0932V13.0976V13.102V13.1064V13.1108V13.1152V13.1195V13.1239V13.1282V13.1326V13.1369V13.1413V13.1456V13.1499V13.1542V13.1585V13.1628V13.1671V13.1714V13.1757V13.18V13.1842V13.1885V13.1928V13.197V13.2013V13.2055V13.2097V13.2139V13.2182V13.2224V13.2266V13.2308V13.2349V13.2391V13.2433V13.2475V13.2516V13.2558V13.2599V13.264V13.2682V13.2723V13.2764V13.2805V13.2846V13.2887V13.2928V13.2968V13.3009V13.305V13.309V13.313V13.3171V13.3211V13.3251V13.3291V13.3331V13.3371V13.3411V13.3451V13.3491V13.353V13.357V13.3609V13.3649V13.3688V13.3727V13.3766V13.3805V13.3844V13.3883V13.3922V13.396V13.3999V13.4037V13.4076V13.4114V13.4152V13.4191V13.4229V13.4267V13.4304V13.4342V13.438V13.4417V13.4455V13.4492V13.453V13.4567V13.4604V13.4641V13.4678V13.4715V13.4752V13.4788V13.4825V13.4861V13.4898V13.4934V13.497V13.5006V13.5042V13.5078V13.5114V13.515V13.5185V13.5221V13.5256V13.5292V13.5327V13.5362V13.5397V13.5432V13.5467V13.5501V13.5536V13.557V13.5605V13.5639V13.5673V13.5707V13.5741V13.5775V13.5809V13.5842V13.5876V13.5909V13.5943V13.5976V13.6009V13.6042V13.6075V13.6108V13.614V13.6173V13.6205V13.6238V13.627V13.6302V13.6334V13.6366V13.6398V13.643V13.6461V13.6492V13.6524V13.6555V13.6586V13.6617V13.6648V13.6679V13.6709V13.674V13.677V13.6801V13.6831V13.6861V13.6891V13.6921V13.695V13.698V13.7009V13.7039V13.7068V13.7097V13.7126V13.7155V13.7183V13.7212V13.7241V13.7269V13.7297V13.7325V13.7353V13.7381V13.7409V13.7436V13.7464V13.7491V13.7519V13.7546V13.7573V13.7599V13.7626V13.7653V13.7679V13.7706V13.7732V13.7758V13.7784V13.781V13.7835V13.7861V13.7886V13.7912V13.7937V13.7962V13.7987V13.8011V13.8036V13.8061V13.8085V13.8109V13.8133V13.8157V13.8181V13.8205V13.8228V13.8252V13.8275V13.8298V13.8321V13.8344V13.8366V13.8389V13.8411V13.8434V13.8456V13.8478V13.85V13.8521V13.8543V13.8564V13.8586V13.8607V13.8628V13.8649V13.8669V13.869V13.871V13.8731V13.8751V13.8771V13.8791V13.881V13.883V13.8849V13.8869V13.8888V13.8907V13.8925V13.8944V13.8963V13.8981V13.8999V13.9017V13.9035V13.9053V13.907V13.9088V13.9105V13.9122V13.9139V13.9156V13.9173V13.9189V13.9206V13.9222V13.9238V13.9254V13.927V13.9285V13.9301V13.9316V13.9331V13.9346V13.9361V13.9375V13.939V13.9404V13.9418V13.9432V13.9446V13.946V13.9473V13.9486V13.95V13.9513V13.9526V13.9538V13.9551V13.9563V13.9575V13.9587V13.9599V13.9611V13.9622V13.9634V13.9645V13.9656V13.9667V13.9678V13.9688V13.9698V13.9709V13.9719V13.9728V13.9738V13.9748V13.9757V13.9766V13.9775V13.9784V13.9793V13.9801V13.9809V13.9817V13.9825V13.9833V13.9841V13.9848V13.9855V13.9862V13.9869V13.9876V13.9883V13.9889V13.9895V13.9901V13.9907V13.9913V13.9918V13.9923V13.9928V13.9933V13.9938V13.9943V13.9947V13.9951V13.9955V13.9959V13.9963V13.9966V13.9969V13.9973V13.9976V13.9978V13.9981V13.9983V13.9985V13.9987V13.9989V13.9991V13.9992V13.9993V13.9994V13.9995V13.9996V13.9996V13.9997C3.33337 14.3679 3.63185 14.6663 4.00004 14.6663C4.36823 14.6663 4.66671 14.3679 4.66671 13.9997V13.9996V13.9996V13.9995V13.9994V13.9993V13.9992V13.9991V13.9989V13.9987V13.9985V13.9983V13.9981V13.9978V13.9976V13.9973V13.9969V13.9966V13.9963V13.9959V13.9955V13.9951V13.9947V13.9943V13.9938V13.9933V13.9928V13.9923V13.9918V13.9913V13.9907V13.9901V13.9895V13.9889V13.9883V13.9876V13.9869V13.9862V13.9855V13.9848V13.9841V13.9833V13.9825V13.9817V13.9809V13.9801V13.9793V13.9784V13.9775V13.9766V13.9757V13.9748V13.9738V13.9728V13.9719V13.9709V13.9698V13.9688V13.9678V13.9667V13.9656V13.9645V13.9634V13.9622V13.9611V13.9599V13.9587V13.9575V13.9563V13.9551V13.9538V13.9526V13.9513V13.95V13.9486V13.9473V13.946V13.9446V13.9432V13.9418V13.9404V13.939V13.9375V13.9361V13.9346V13.9331V13.9316V13.9301V13.9285V13.927V13.9254V13.9238V13.9222V13.9206V13.9189V13.9173V13.9156V13.9139V13.9122V13.9105V13.9088V13.907V13.9053V13.9035V13.9017V13.8999V13.8981V13.8963V13.8944V13.8925V13.8907V13.8888V13.8869V13.8849V13.883V13.881V13.8791V13.8771V13.8751V13.8731V13.871V13.869V13.8669V13.8649V13.8628V13.8607V13.8586V13.8564V13.8543V13.8521V13.85V13.8478V13.8456V13.8434V13.8411V13.8389V13.8366V13.8344V13.8321V13.8298V13.8275V13.8252V13.8228V13.8205V13.8181V13.8157V13.8133V13.8109V13.8085V13.8061V13.8036V13.8011V13.7987V13.7962V13.7937V13.7912V13.7886V13.7861V13.7835V13.781V13.7784V13.7758V13.7732V13.7706V13.7679V13.7653V13.7626V13.7599V13.7573V13.7546V13.7519V13.7491V13.7464V13.7436V13.7409V13.7381V13.7353V13.7325V13.7297V13.7269V13.7241V13.7212V13.7183V13.7155V13.7126V13.7097V13.7068V13.7039V13.7009V13.698V13.695V13.6921V13.6891V13.6861V13.6831V13.6801V13.677V13.674V13.6709V13.6679V13.6648V13.6617V13.6586V13.6555V13.6524V13.6492V13.6461V13.643V13.6398V13.6366V13.6334V13.6302V13.627V13.6238V13.6205V13.6173V13.614V13.6108V13.6075V13.6042V13.6009V13.5976V13.5943V13.5909V13.5876V13.5842V13.5809V13.5775V13.5741V13.5707V13.5673V13.5639V13.5605V13.557V13.5536V13.5501V13.5467V13.5432V13.5397V13.5362V13.5327V13.5292V13.5256V13.5221V13.5185V13.515V13.5114V13.5078V13.5042V13.5006V13.497V13.4934V13.4898V13.4861V13.4825V13.4788V13.4752V13.4715V13.4678V13.4641V13.4604V13.4567V13.453V13.4492V13.4455V13.4417V13.438V13.4342V13.4304V13.4267V13.4229V13.4191V13.4152V13.4114V13.4076V13.4037V13.3999V13.396V13.3922V13.3883V13.3844V13.3805V13.3766V13.3727V13.3688V13.3649V13.3609V13.357V13.353V13.3491V13.3451V13.3411V13.3371V13.3331V13.3291V13.3251V13.3211V13.3171V13.313V13.309V13.305V13.3009V13.2968V13.2928V13.2887V13.2846V13.2805V13.2764V13.2723V13.2682V13.264V13.2599V13.2558V13.2516V13.2475V13.2433V13.2391V13.2349V13.2308V13.2266V13.2224V13.2182V13.2139V13.2097V13.2055V13.2013V13.197V13.1928V13.1885V13.1842V13.18V13.1757V13.1714V13.1671V13.1628V13.1585V13.1542V13.1499V13.1456V13.1413V13.1369V13.1326V13.1282V13.1239V13.1195V13.1152V13.1108V13.1064V13.102V13.0976V13.0932V13.0888V13.0844V13.08V13.0756V13.0712V13.0667V13.0623V13.0578V13.0534V13.0489V13.0445V13.04V13.0355V13.0311V13.0266V13.0221V13.0176V13.0131V13.0086V13.0041V12.9996V12.995V12.9905V12.986V12.9815V12.9769V12.9724V12.9678V12.9633V12.9587V12.9541V12.9496V12.945V12.9404V12.9358V12.9312V12.9266V12.922V12.9174V12.9128V12.9082V12.9036V12.899V12.8944V12.8897V12.8851V12.8805V12.8758V12.8712V12.8665V12.8619V12.8572V12.8525V12.8479V12.8432V12.8385V12.8338V12.8292V12.8245V12.8198V12.8151V12.8104V12.8057V12.801V12.7963V12.7916V12.7868V12.7821V12.7774V12.7727V12.7679V12.7632V12.7585V12.7537V12.749V12.7442V12.7395V12.7347V12.73V12.7252V12.7205V12.7157V12.7109V12.7062V12.7014V12.6966V12.6918V12.687V12.6823V12.6775V12.6727V12.6679V12.6631V12.6583V12.6535V12.6487V12.6439V12.6391V12.6343V12.6295V12.6246V12.6198V12.615V12.6102V12.6054V12.6005V12.5957V12.5909V12.586V12.5812V12.5764V12.5715V12.5667V12.5619V12.557V12.5522V12.5473V12.5425V12.5376V12.5328V12.5279V12.5231V12.5182V12.5134V12.5085V12.5036V12.4988V12.4939V12.4891V12.4842V12.4793V12.4745V12.4696V12.4647V12.4599V12.455V12.4501V12.4452V12.4404V12.4355V12.4306V12.4257V12.4209V12.416V12.4111V12.4062V12.4014V12.3965V12.3916V12.3867V12.3818V12.3769V12.3721V12.3672V12.3623V12.3574V12.3525V12.3477V12.3428V12.3379V12.333Z"
        fill={color}
      />
    </svg>
  )
}

TeachersIcon.propTypes = {
  color: PropTypes.string,
}

export default TeachersIcon
