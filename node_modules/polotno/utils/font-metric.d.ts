declare const FontMetrics: {
    ({ fontFamily, fontWeight, fontSize, origin, }?: {
        fontFamily?: string | undefined;
        fontWeight?: string | undefined;
        fontSize?: number | undefined;
        origin?: string | undefined;
    }): {
        fontFamily: string;
        fontWeight: string;
        fontSize: number;
        capHeight: number;
        baseline: number;
        xHeight: number;
        descent: number;
        bottom: number;
        ascent: number;
        tittle: number;
        top: number;
    };
    settings: {
        chars: {
            capHeight: string;
            baseline: string;
            xHeight: string;
            descent: string;
            ascent: string;
            tittle: string;
        };
    };
};
export default FontMetrics;
