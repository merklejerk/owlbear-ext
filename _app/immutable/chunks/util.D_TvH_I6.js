async function u(r){return new Promise((e,t)=>{setTimeout(e,r)})}function n(r,e){return(e+r%e)%e}function i(r){return r===!0?!0:typeof r=="number"?r>0:typeof r=="string"?(r=r.toLowerCase().trim(),r==="true"||r==="yes"||Number(r)>0):!1}export{u as d,i,n as w};
