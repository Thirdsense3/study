package com.msh.stockChart.Member;


import com.msh.stockChart.Dao.Member;

public interface MemberRepository {
    void save(Member member);

    Member findById(Long id);
}
