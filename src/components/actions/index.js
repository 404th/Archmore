

export function setSliderImgs(){
  return {
    type:'img',
    info:[
      { id:'img-1', src:'./images/img/gallery/img-01.svg', alt:'home-1', width:'100%', height:'100%' },
      { id:'img-2', src:'./images/img/gallery/img-02.svg', alt:'home-2', width:'100%', height:'100%' },
      { id:'img-3', src:'./images/img/gallery/img-03.svg', alt:'home-3', width:'100%', height:'100%' },
      { id:'img-4', src:'./images/img/gallery/img-02.svg', alt:'home-4', width:'100%', height:'100%' },
      { id:'img-5', src:'./images/img/gallery/img-03.svg', alt:'home-5', width:'100%', height:'100%' },
    ]
  }
}

export function setPartners(){
  return {
    type:'partnerImg',
    info:[
      { id:'partner-1', src:'./images/img/footer/logo-1.svg', alt:'partner-1', width:'100%', height:'100%' },
      { id:'partner-2', src:'./images/img/footer/logo-2.svg', alt:'partner-2', width:'100%', height:'100%' },
      { id:'partner-3', src:'./images/img/footer/logo-3.svg', alt:'partner-3', width:'100%', height:'100%' },
      { id:'partner-2', src:'./images/img/footer/logo-2.svg', alt:'partner-2', width:'100%', height:'100%' },
      { id:'partner-3', src:'./images/img/footer/logo-3.svg', alt:'partner-3', width:'100%', height:'100%' },
    ]
  }
}
export function setFootLink(){
  return {
    type:'footerNav',
    info:[
      { to: '/#', title:'About us' },
      { to: '/#', title:'How it works' },
      { to: '/#', title:'FAQ' },
      { to: '/#', title:'Contact us' },
      { to: '/#', title:'Privacy Police' }
    ]
  }
}

