export const OPEN_ALERT = "OPEN_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

//Action Creator
export const openAlert = ({title, content, buttons, closeValue}) => ({
   type: OPEN_ALERT,
   title,
   content,
   buttons,
   closeValue,
});

export const closeAlert = (value) => ({
    type: CLOSE_ALERT,
    value,
});