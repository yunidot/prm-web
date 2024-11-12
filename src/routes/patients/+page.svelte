<script>
    import { TableHandler, Datatable, ThSort, ThFilter } from '@vincjo/datatables'

    export let data;

    const table_data = data.patients;
    const table = new TableHandler(
        table_data,
        {
            rowsPerPage: 10,
            sort: { field: 'patient_no', direction: 'desc'} | undefined
        }
    );


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
                    <a href="/patients/create" class="btn btn-sm btn-light text-primary me-2">Add</a>
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
            <div class="spinner" class:active={table.isLoading}></div>
            <table>
                <thead>
                    <tr>
                        <ThSort {table} locale="ko-KR" field="patient_nm">환자명</ThSort>
                        <ThSort {table} field="phone_no">전화번호</ThSort>
                        <ThSort {table} field="email">이메일</ThSort>
                        <ThSort {table} field="visited">최근방문일</ThSort>
                        <ThSort {table} field="reservation">예약일</ThSort>
                    </tr>
                    <tr>
                        <ThFilter {table} field="patient_nm" />
                        <ThFilter {table} field="phone_no" />
                        <ThFilter {table} field="email" />
                        <ThFilter {table} field="visited" />
                        <ThFilter {table} field="reservation" />
                    </tr>
                </thead>
                <tbody>
                {#each table.rows as row}
                    <tr>
                        <td><a href="/patients/view/{row.patient_no}">{row.patient_nm}</a></td>
                        <td>{row.phone_no}</td>
                        <td>{row.email}</td>
                        <td>2024-01-01</td>
                        <td>2024-12-31</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </Datatable>
    </div>
</div>
