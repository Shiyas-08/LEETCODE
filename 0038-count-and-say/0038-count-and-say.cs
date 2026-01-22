public class Solution
{
    public string CountAndSay(int n)
    {
        // Base case
        string result = "1";

        // Loop from 2 to n
        for (int step = 2; step <= n; step++)
        {
            string current = "";
            int count = 1;

            // Read the previous result string
            for (int i = 0; i < result.Length; i++)
            {
                // If next character is same, increase count
                if (i < result.Length - 1 && result[i] == result[i + 1])
                {
                    count++;
                }
                else
                {
                    // If different, add count + character
                    current += count.ToString() + result[i];
                    count = 1; // reset count
                }
            }

            // Update result
            result = current;
        }

        return result;
    }
}
