<script>
    export let userName = ""
</script>
<div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
        <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
                <!-- Sidenav Menu Heading (Account)-->
                <!-- * * Note: * * Visible only on and above the sm breakpoint-->

                <!-- Sidenav Menu Heading (Core)-->
                <div class="sidenav-menu-heading">Core</div>
                <!-- Sidenav Accordion (Dashboard)-->
                <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                    <div class="nav-link-icon"><i data-feather="activity"></i></div>
                    Dashboards
                    <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <!-- Sidenav Heading (Custom)-->
                <div class="sidenav-menu-heading">Patient</div>
                    <!-- Sidenav Accordion (Pages)-->
                <a class="nav-link" href="#">
                    <div class="nav-link-icon"><i class="fa-solid fa-hospital-user"></i></div>
                    환자 목록
                </a>
                <!-- Sidenav Heading (Sending/Receiving)-->
                <div class="sidenav-menu-heading">Send/Receive</div>
                <a class="nav-link" href="#">
                    <div class="nav-link-icon"><i class="fa-solid fa-satellite-dish"></i></div>
                    수/발신 관리
                </a>

                <!-- Sidenav Heading (Category)-->
                <div class="sidenav-menu-heading">Contents</div>

                <!-- Sidenav Accordion (Category)-->
                <a class="nav-link" href="#">
                    <div class="nav-link-icon"><i class="fa-solid fa-folder-open"></i></div>
                    자료 관리
                </a>
                <a class="nav-link" href="#">
                    <div class="nav-link-icon"><i class="fa-solid fa-list"></i></div>
                    카테고리 관리
                </a>

                <!-- Sidenav Heading (UI Toolkit)-->
                <div class="sidenav-menu-heading">Config</div>
                <a class="nav-link" href="#">
                    <div class="nav-link-icon"><i class="fa-solid fa-gear"></i></div>
                    설정
                </a>
            </div>
        </div>
        <!-- Sidenav Footer-->
        <div class="sidenav-footer">
            <div class="sidenav-footer-content">
                <div class="sidenav-footer-subtitle">Logged in as:</div>
                <div class="sidenav-footer-title">{userName}</div>
            </div>
        </div>
    </nav>
</div>