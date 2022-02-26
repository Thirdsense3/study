package com.msh.stockChart.Login;

import com.msh.stockChart.Dao.Member;

public interface LoginService {

    void Login(Long id, String pw);

    void register(Member member);

}
