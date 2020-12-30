export default class ModelAuth{
    setTokens = tokens => {
        tokens.forEach(({ name, val }) => {
            localStorage.setItem(name, val);
        });
        //TODO add token check
    }

    isTokens = _ => {
        const names = ['google', 'chat', 'bot'];
        const is =  names.every(name => localStorage.getItem(name));
        console.log(is);

        return is;
    }
}