package com.msh.stockChart.Member;

import com.msh.stockChart.Dao.Member;

public interface MemberService {
    Member findMember(Long memberId);

    String signUp(Member member);

    String singIn(Long id, String pw);
}
