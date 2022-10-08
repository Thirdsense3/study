#include <iostream>
#include <vector>
#include <stack>
#include "algorithm"

using namespace std;

int n;
bool isWall[51][51];
char map[51][51];

int dx[]={0,0,1,-1};
int dy[]={1,-1,0,0};

int answer = 987654321;

vector<pair<int,int>> door;

struct mirror{
    int x;
    int y;
    int dir;
    int cnt;
};

void backTracking(int startX, int startY, int dir) {
    stack<mirror> stack1;

    stack1.push({startX, startY, dir, 0});

    while (!stack1.empty()) {
        int x = stack1.top().x;
        int y = stack1.top().y;
        int nDir = stack1.top().dir;
        int cnt = stack1.top().cnt;
        stack1.pop();

        while (true) {
            int nextX = x + dx[nDir];
            int nextY = y + dy[nDir];
            if (map[nextX][nextY] == '*' || nextX > n || nextX < 0 || nextY > n || nextY < 0) {
                break;
            }

            if (map[nextX][nextY] == '!') {
                if (dir == 0) {
                    stack1.push({nextX, nextY, 3, cnt + 1});
                    stack1.push({nextX, nextY, 1, cnt + 1});
                } else if (dir == 1) {
                    stack1.push({nextX, nextY, 0, cnt + 1});
                    stack1.push({nextX, nextY, 2, cnt + 1});
                } else if (dir == 2) {
                    stack1.push({nextX, nextY, 1, cnt + 1});
                    stack1.push({nextX, nextY, 2, cnt + 1});
                } else if (dir == 3) {
                    stack1.push({nextX, nextY, 0, cnt + 1});
                    stack1.push({nextX, nextY, 2, cnt + 1});
                }
                break;
            } else if (map[nextX][nextY] == '#') {
                answer = min(answer, cnt);
            }
        }
    }
}


int main() {
    cin >> n;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            char ch;

            cin >> ch;

            map[i][j] = ch;

            if (ch == '#') {
                door.emplace_back(i, j);
            } else if (ch == '*') {
                isWall[i][j] = true;
            }
        }
    }

    int start_DoorX = door[0].first;
    int start_DoorY = door[0].second;
    vector<int> startDir;

    for (int i = 0; i < 4; i++) {
        while (true) {
            int nextX = start_DoorX + dx[i];
            int nextY = start_DoorY + dy[i];

            if (map[nextX][nextY] == '*' || nextX > n || nextX < 0 || nextY > n || nextY < 0) break;

            if (map[nextX][nextY] == '!') {
                startDir.push_back(i);
                break;
            }
        }
    }

    for (int i: startDir) {
        backTracking(start_DoorX, start_DoorY, i);
    }

    cout << answer << endl;

    return 0;
}
