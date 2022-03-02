package com.msh.stockChart.Member;

import com.msh.stockChart.Dao.Member;

public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository = new MemoryMemberRepository();

    @Override
    public Member findMember(Long memberId) {
        return null;
    }

    @Override
    public String singIn(Long id, String pw) {
        return null;
    }

    @Override
    public String signUp(Member member) {
        return null;
    }
}
