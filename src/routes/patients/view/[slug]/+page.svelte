<script>
        export let data;

        function _onclick() {
            console.log("clicked");
        }
</script>


<svelte:head>
    <title>환자 보기/편집 - Dencomm Ent</title>
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
                </div>
            </div>
        </div>
    </div>
</header>

<div class="card">
    <form id="inputForm">
        <div class="card-header">
            <i class="fas fa-pencil"></i>&nbsp;
            환자정보 보기/편집
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="patient_nm" class="form-label">환자명</label>
                <input type="text" id="patient_nm" name="patient_nm" class="form-control"  placeholder="환자명" value="사용자" />
            </div>
            <div class="mb-3">
                <label for="phone_no" class="form-label">연락처</label>
                <input type="text" id="phone_no" name="phone_no" class="form-control" placeholder="연락처" value="010-1234-1234" />
            </div>
            <div class="mb-3">
                <label for="phone_no" class="form-label">이메일</label>
                <input type="email" id="phone_no" name="phone_no" class="form-control" placeholder="name@example.com" value="name@example.com" />
            </div>
            <div class="text-end">
                <button type="button" role="button" on:click={_onclick} class="btn btn-primary">저장</button>
                <a href="/patients" class="btn btn-warning">취소</a>
            </div>
        </div>
    </form>
</div>