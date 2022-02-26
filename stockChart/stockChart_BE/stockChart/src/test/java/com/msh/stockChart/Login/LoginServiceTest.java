package com.msh.stockChart.Login;

import com.msh.stockChart.Dao.Member;
import com.msh.stockChart.Member.MemberService;
import com.msh.stockChart.Member.MemberServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class LoginServiceTest {
    LoginService loginService = new LoginServiceImpl();
    MemberService memberService = new MemberServiceImpl();

    @Test
    void register(){
        Member member = new Member(1L,"abcdefg","abcd");

        loginService.register(member);

        Member findMember = memberService.findMember(1L);

        Assertions.assertThat(member).isEqualTo(findMember);
    }
}
