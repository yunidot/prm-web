<script>
    import { TableHandler, Datatable, ThSort, ThFilter } from '@vincjo/datatables'
    const data = [
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"},
        {name: "사용자", email: "xxxxx@xxxxxx.com", phone: "xxx-xxxx-xxxx", visited: "xxxx-xx-xx", reservation: "xxxx-xx-xx"}
    ];

    const table = new TableHandler(data, { rowsPerPage: 10});
</script>

<svelte:head>
    <title>환자목록 - Dencomm Ent</title>
</svelte:head>


<header class="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
    <div class="container-xl px-4">
        <div class="page-header-content">
            <div class="row align-items-center justify-content-between pt-3">
                <div class="col-auto mb-3">
                    <h1 class="page-header-title">
                        <div class="page-header-icon"><i class="fa-solid fa-hospital-user"></i></div>
                        환자관리
                    </h1>
                </div>
                <div class="col-12 col-xl-auto mb-3">
                    <a href="/patients/view/3" class="btn btn-sm btn-light text-primary me-2">Add</a>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="card">
    <div class="card-header">
        <h2>환자 목록</h2>
    </div>
    <div class="card-body table-responsive">
        <Datatable  basic {table}>
            <table>
                <thead>
                    <tr>
                        <ThSort {table} locale="ko-KR" field="name">환자명</ThSort>
                        <ThSort {table} field="phone">전화번호</ThSort>
                        <ThSort {table} field="email">이메일</ThSort>
                        <ThSort {table} field="visited">최근방문일</ThSort>
                        <ThSort {table} field="reservation">예약일</ThSort>
                    </tr>
                    <tr>
                        <ThFilter {table} field="name" />
                        <ThFilter {table} field="phone" />
                        <ThFilter {table} field="email" />
                        <ThFilter {table} field="visited" />
                        <ThFilter {table} field="reservation" />
                    </tr>
                </thead>
                <tbody>
                {#each table.rows as row}
                    <tr>
                        <td><a href="/patients/view/3">{row.name}</a></td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                        <td>{row.visited}</td>
                        <td>{row.reservation}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </Datatable>
    </div>
</div>
