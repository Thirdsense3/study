class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> us(nums.begin(), nums.end());

        int answer = 0;

        for (int i : nums) {
            if (us.find(i) == us.end()) continue;

            us.erase(i);

            int prev = i - 1;
            int next = i + 1;

            while (us.find(prev) != us.end()) {
                us.erase(prev--);
            }

            while (us.find(next) != us.end()) {
                us.erase(next++);
            }

            answer = max(answer, (next - prev - 1));
        }

        return answer;
    }
};