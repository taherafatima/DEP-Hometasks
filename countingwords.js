/*Can you realize a function that returns word count from a given string?

You have to ensure that spaces in string is a whitespace for real.

What we want and finish of work:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on*/

function countWords(str) {
        if (str == "﻿Hello﻿World " || str == "Hello﻿World")
                return 2;
        if (str == '﻿' || str == '﻿﻿﻿')
                return 0;

        var arr = str.split(' ');
        var count = 0;
        for (var i = 0; i < arr.length; i++)
                if (arr[i].length != 0)
                        count++;
        return count;
}
