// export function menuInit() {
// 	if (document.querySelector(".icon-menu")) {
// 		document.addEventListener("click", function (e) {
// 			if (bodyLockStatus && e.target.closest('.icon-menu')) {
// 				bodyLockToggle();
// 				document.documentElement.classList.toggle("menu-open");
// 			}
// 		});
// 	};
// }
// export function menuOpen() {
// 	bodyLock();
// 	document.documentElement.classList.add("menu-open");
// }
// export function menuClose() {
// 	bodyUnlock();
// }


$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu, .profile__menu').toggleClass('activ');
		$('body').toggleClass('lock');
	});
});
