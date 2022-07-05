#include "iostream"
#include "queue"

using namespace std;

int n, l, r;

int countries[51][51];
int boardLine[51][51];
bool isVisit[51][51];
int unionCnt[2501];

int dirX[] = {0, 0, 1, -1};
int dirY[] = {1, -1, 0, 0};

pair<int, int> checkBoard(int x, int y, int index) {
    pair<int, int> result = {0, 0};

    queue<pair<int, int>> q;
    q.push({x, y});

    result.first = countries[x][y];
    result.second++;
    boardLine[x][y] = index;
    isVisit[x][y] = true;

    while (!q.empty()) {
        int curX = q.front().first;
        int curY = q.front().second;
        int people_cnt = countries[curX][curY];
        q.pop();

        for (int i = 0; i < 4; i++) {
            int dx = curX + dirX[i];
            int dy = curY + dirY[i];

            if (dx >= 0 && dx < n && dy >= 0 && dy < n) {
                int different_cnt = abs(people_cnt - countries[dx][dy]);

                if (l <= different_cnt && different_cnt <= r) {
                    if (!isVisit[dx][dy]) {
                        boardLine[dx][dy] = index;
                        result.first += countries[dx][dy];
                        result.second++;
                        isVisit[dx][dy] = true;
                        q.push({dx, dy});
                    }
                }
            }
        }
    }

    return result;
}

void init() {

    for (int &i: unionCnt) {
        i = 0;
    }

    for (int i = 0; i < 51; i++) {
        for (int j = 0; j < 51; j++) {
            boardLine[i][j] = 0;
            isVisit[i][j] = false;
        }
    }
}

int main() {
    cin >> n >> l >> r;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> countries[i][j];
        }
    }

    int answer = 0;

    while (true) {

        int index = 1;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (!isVisit[i][j]) {
                    pair<int, int> result = checkBoard(i, j, index);
                    unionCnt[index] = result.first / result.second;
                    index++;
                }
            }
        }

        if (index == n * n + 1) {
            break;
        } else {
            answer++;

            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    countries[j][k] = unionCnt[boardLine[j][k]];
                }
            }

            init();
        }
    }

    cout << answer << endl;
}