const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let role='Student';
const users={
 Student:{id:'STU2026001',pass:'Edu@1234',name:'Rahul Sharma'},
 Admin:{id:'ADMIN2026',pass:'Admin@1234',name:'Administrator'}
};
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2600)}
function openLogin(r){role=r;$('#loginTitle').textContent=r+' Login';$('#uid').value='';$('#pwd').value='';$('#cred').innerHTML='<b>Demo ID:</b> '+users[r].id+'<br><b>Demo Password:</b> '+users[r].pass;$('#login').classList.add('show')}
$$('[data-role]').forEach(b=>b.onclick=()=>openLogin(b.dataset.role));
$('#close').onclick=()=>$('#login').classList.remove('show');
$('#login').onclick=e=>{if(e.target.id==='login')$('#login').classList.remove('show')};
$('#loginBtn').onclick=()=>{
 const u=users[role];
 if($('#uid').value.trim()===u.id && $('#pwd').value===u.pass){$('#login').classList.remove('show');showPortal(role)}
 else toast('Invalid demo User ID or Password');
};
function showPortal(r){
 $('#public').style.display='none';document.querySelector('nav').style.display='none';document.querySelector('footer').style.display='none';$('#portal').classList.remove('hidden');
 $('#portal').innerHTML=r==='Student'?studentHTML():adminHTML();wirePortal();
 window.scrollTo(0,0);
}
function portalHeader(title){return `<div class="portalbar"><div class="wrap"><div class="portal-brand"><img src="logo.png"><div><b>EduSrishti University</b><br><small>${title}</small></div></div><button class="logout" id="logout">Logout</button></div></div>`}
function studentHTML(){return portalHeader('Student Portal')+`<div class="portal-layout"><aside class="side"><h3>Student Portal</h3><button>🏠 Dashboard</button><button>👤 My Profile</button><button>📚 My Course</button><button>💳 Fee Details</button><button>🧾 Payment History</button><button>📝 Exam Form</button><button>🏆 Results</button><button>✅ Attendance</button><button>📢 Notices</button><button>📜 Certificates</button></aside><main class="content"><div class="welcome"><div><h2>Welcome, Rahul Sharma</h2><p>Enrollment No: <b>ESU2026001</b> • BCA • Semester 3</p></div><button class="btn gold" id="studentPay">Pay Fees</button></div><div class="dashcards"><div class="dashcard"><small>Attendance</small><b>86%</b></div><div class="dashcard"><small>Current Semester</small><b>03</b></div><div class="dashcard"><small>Pending Fees</small><b>₹0</b></div><div class="dashcard"><small>Notices</small><b>7</b></div></div><div class="tablebox"><h3>Fee Summary</h3><table class="table"><tr><th>Fee</th><th>Amount</th><th>Status</th><th>Action</th></tr><tr><td>Tuition Fee</td><td>₹45,000</td><td><span class="badge">Paid</span></td><td>Receipt</td></tr><tr><td>Examination Fee</td><td>₹2,500</td><td><span class="badge">Paid</span></td><td>Receipt</td></tr><tr><td>Registration</td><td>₹1,500</td><td><span class="badge">Paid</span></td><td>Receipt</td></tr></table></div><div class="tablebox"><h3>Latest Notices</h3><p>• Semester examination schedule will be published in the portal.</p><p>• Keep your student profile and documents updated.</p></div></main></div>`}
function adminHTML(){return portalHeader('Administration Panel')+`<div class="portal-layout"><aside class="side"><h3>Admin Panel</h3><button>📊 Dashboard</button><button>👥 Students</button><button>📝 Applications</button><button>📚 Courses</button><button>🏫 Departments</button><button>👨‍🏫 Faculty</button><button>💳 Fees & Payments</button><button>🧪 Exams</button><button>🏆 Results</button><button>📢 Notices</button><button>🎓 Scholarships</button><button>📈 Reports</button></aside><main class="content"><div class="adminhero"><h2>University Administration Dashboard</h2><p>Central management of admissions, students, academics and payments.</p></div><div class="dashcards"><div class="dashcard"><small>Total Students</small><b>4,820</b></div><div class="dashcard"><small>New Applications</small><b>318</b></div><div class="dashcard"><small>Fee Collection</small><b>₹28.4L</b></div><div class="dashcard"><small>Pending Fees</small><b>₹3.2L</b></div></div><div class="modulegrid" style="margin-top:18px"><div class="module"><b>👥 Student Management</b><span>Add, edit and search student records.</span></div><div class="module"><b>📝 Admission Management</b><span>Review applications and statuses.</span></div><div class="module"><b>💳 Fee & Payment</b><span>Track collections and receipts.</span></div><div class="module"><b>📚 Academic Management</b><span>Courses, departments and semesters.</span></div><div class="module"><b>👨‍🏫 Faculty Management</b><span>Faculty profiles and assignments.</span></div><div class="module"><b>🏆 Examination & Results</b><span>Exam schedules, marks and results.</span></div><div class="module"><b>📢 Notice Board</b><span>Publish student announcements.</span></div><div class="module"><b>📈 Reports</b><span>Download operational reports.</span></div></div><div class="tablebox"><h3>Recent Applications</h3><table class="table"><tr><th>Application</th><th>Student</th><th>Course</th><th>Status</th></tr><tr><td>APP-26031</td><td>Aman Verma</td><td>BCA</td><td><span class="badge">Submitted</span></td></tr><tr><td>APP-26032</td><td>Priya Singh</td><td>BBA</td><td><span class="badge">Under Review</span></td></tr><tr><td>APP-26033</td><td>Mohit Kumar</td><td>B.Tech</td><td><span class="badge">Approved</span></td></tr></table></div></main></div>`}
function wirePortal(){
 $('#logout').onclick=()=>{location.reload()};
 const pay=$('#studentPay');if(pay)pay.onclick=()=>toast('Fee payment screen opened — connect a real payment gateway for live transactions.');
}
$('#admissionForm').onsubmit=e=>{e.preventDefault();toast('Demo application submitted successfully.');e.target.reset()};
$('#quickPay').onclick=()=>toast('Demo payment flow ready. No real payment is collected.');
$('#menu').onclick=()=>$('#links').classList.toggle('open');
