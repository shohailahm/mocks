


export const findByTestAttr=(wrapper,val)=>{
   return wrapper.find(`[data-test="${val}"]`);
}

export const findByClass=(wrapper,val)=>{
    return wrapper.find(`.${val}`);
 }


