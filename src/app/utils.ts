export class Utils {
    static enBits(number: number) {

        //十亿
        if (number / 1000000000 > 1)
            return { digits: 1000000000, symbol: 'B' }
        //百万  
        else if (number / 1000000 > 1)
            return { digits: 1000000, symbol: 'M' }
        //千  
        else if (number / 1000 > 1)
            return { digits: 1000, symbol: 'K' }
        else
            return { digits: 1, symbol: '' }


    }

    static zhBits(number: number) {
        //亿
        if (number / 100000000 > 1)
            return { digits: 100000000, symbol: '亿' }
        //万  
        else if (number / 10000 > 1)
            return { digits: 1000000, symbol: '万' }
        else
            return { digits: 1, symbol: '' }
    }
}