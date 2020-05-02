export default class payloadFixerModule {
    static urlMaker(title) {
        return title.toLowerCase().replace(/[^a-z0-9]+/ig, '_');
    }

    static async validIt(data, type) {
        if (type === 'dynamic') {
            // let data = [{id:'aa'}, {id:'aa'}, {id:'ab'}]
            // m =  new Map();
            // data.filter(a => { if(m.has(a.id)){return false} m.set(a.id, true); return true})
        }
        const temp = data;
        return temp;
    }
}
