import {ImageResponse} from 'next/og';
export const alt='Aiplun Studio — AI / SYSTEM / WEB / APP';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#f5f7fb',color:'#141b26',display:'flex',flexDirection:'column',padding:'64px 76px',fontFamily:'sans-serif'}}><div style={{display:'flex',fontSize:27,letterSpacing:3,color:'#2452ff'}}>AI / SYSTEM / WEB / APP</div><div style={{display:'flex',flexDirection:'column',marginTop:60,fontSize:100,fontWeight:800,letterSpacing:-6,lineHeight:1.05}}><span>Aiplun</span><span style={{color:'#2452ff'}}>Studio.</span></div><div style={{display:'flex',justifyContent:'space-between',marginTop:'auto',borderTop:'1px solid #cbd4e3',paddingTop:24,fontSize:22}}><span>Less busy. More possibility.</span><span>aiplun-studio.jp</span></div></div>,size)}
