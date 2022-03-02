package com.msh.stockChart.Login;

import com.msh.stockChart.Dao.Member;
import com.msh.stockChart.Member.MemberRepository;
import com.msh.stockChart.Member.MemberService;
import com.msh.stockChart.Member.MemberServiceImpl;

public class LoginServiceImpl implements LoginService {
    MemberService memberService = new MemberServiceImpl();

    @Override
    public void Login(Long id, String pw) {
        String status = memberService.singIn(id, pw);
    }

    @Override
    public void register(Member member) {
        memberService.signUp(member);
    }
}
