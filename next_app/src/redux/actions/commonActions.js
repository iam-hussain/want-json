export const LOADER_START = "LOADER_START";
export const LOADER_END = "LOADER_END";
export const MENU_TOGGLE = "MENU_TOGGLE";

//Action Creator
export const loaderEnd = () => ({
   type: LOADER_END
});

export const loaderStart = () => ({
    type: LOADER_START
});

export const menuToggle = () => ({
    type: MENU_TOGGLE
})