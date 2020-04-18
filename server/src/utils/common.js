import generator from 'generate-password';

export default class commonModule {
    static async randomGenerator(size) {
        const returnData = await generator.generate({
            length: size,
            uppercase: true,
            numbers: true,
            exclude: true,
            excludeSimilarCharacters: true,
        });
        return returnData;
    }
}
