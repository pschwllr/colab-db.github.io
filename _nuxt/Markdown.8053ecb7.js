import s from"./ContentSlot.1a39ca2b.js";import{f as o,h as f,k as u,y as m}from"./entry.ce6e446b.js";import"./utils.2a362a0b.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=f(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};