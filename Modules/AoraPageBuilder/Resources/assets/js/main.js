"use strict";
$ = jQuery;
$(document).ready(function () {
  collapsedHotline();
  openMenu();
  openPopupLogin();
  dropdown();
  dropdownCheckbox();
  checkAnswer();
  countdown();
});
function collapsedHotline() {
  $(".social-item.has-expand").each(function () {
    const $item = $(this);
    const $expands = $item.find(".expands");
    const $link = $item.find("a");

    if ($link.length) {
      $link.on("click", function (event) {
        event.stopPropagation();
      });
    }

    $item.on("click", function () {
      $expands.toggleClass("show");
    });
  });
}

function openMenu() {
  const $hamburgerMenu = $(".ic-hamburger");
  const $overlay = $(".overlay");
  const $sidebar = $(".sidebar");
  const $body = $("body");

  $hamburgerMenu.on("click", function () {
    $sidebar.toggleClass("is-open");
    $overlay.toggleClass("is-open");
    $body.addClass("overflow-hidden");
  });

  $overlay.on("click", function () {
    $sidebar.removeClass("is-open");
    $overlay.removeClass("is-open");
    $body.removeClass("overflow-hidden");
    if ($(".tablet-study-menu-item-content").hasClass("is-open")) {
      $(".tablet-study-menu-item-content").removeClass("is-open");
    }
  });

  // open menu-user
  const $userIcon = $(".action-button");
  const $menuUser = $(".user-menu");

  $userIcon.on("click", function (e) {
    e.stopPropagation();
    $menuUser.toggleClass("is-open");
  });

  $(document).on("click", function (event) {
    const $target = $(event.target);
    const isClickInsideMenu = $target.closest(".user-menu").length > 0;
    const isClickOnIcon = $target.closest(".action-button").length > 0;

    if (!isClickInsideMenu && !isClickOnIcon) {
      $menuUser.removeClass("is-open");
    }
  });

  // open drawer question
  $(".item-question").on("click", function () {
    $(".tablet-study-menu-item-content").addClass("is-open");
    $(".overlay").addClass("is-open");
  });
}

function openPopupLogin() {
  const $icAction = $(".ic-action");
  const $modalLoginEl = $(".modal-login");
  const $modalRegisterEl = $(".modal-register");
  const $btnLogin = $("header .btn-login");
  const $btnRegister = $("header .btn-register");

  const modal = new bootstrap.Modal($modalLoginEl[0]);
  const modalRegister = new bootstrap.Modal($modalRegisterEl[0]);

  $icAction.on("click", function (e) {
    e.preventDefault();
    modal.show();
  });

  $btnLogin.on("click", function (e) {
    e.preventDefault();
    modal.show();
  });

  $btnRegister.on("click", function (e) {
    e.preventDefault();
    modalRegister.show();
  });
}

function dropdown() {
  // Toggle dropdown khi bấm vào dropdown-mode
  $(".dropdown-mode").on("click", function (e) {
    e.stopPropagation();

    // Đóng tất cả dropdown khác
    $(".select-display-mode")
      .not($(this).closest(".select-display-mode"))
      .removeClass("active");

    // Toggle dropdown hiện tại
    $(this).closest(".select-display-mode").toggleClass("active");
  });

  // Click chọn chế độ hiển thị
  $(".list-mode li").on("click", function (e) {
    e.stopPropagation();
    const mode = $(this).data("mode");
    const label = $(this).text();

    const $dropdown = $(this).closest(".select-display-mode");

    // Cập nhật text hiển thị
    $dropdown.find(".selected-mode").text(label);

    // Active item được chọn
    $dropdown.find(".list-mode li").removeClass("active");
    $(this).addClass("active");

    // Đóng dropdown
    $dropdown.removeClass("active");

    // Cập nhật class cho danh sách nếu cần (ví dụ cho .game-object-view)
    const $list = $(".game-object-view");
    if (mode === "horizontal") {
      $list.removeClass("vertical").addClass("horizontal");
    } else if (mode === "vertical") {
      $list.removeClass("horizontal").addClass("vertical");
    } else {
      $list.removeClass("horizontal vertical"); // Trường hợp "Mặc định"
    }
  });

  // Click bên ngoài để đóng tất cả dropdown
  $(document).on("click", function () {
    $(".select-display-mode").removeClass("active");
  });
}
function dropdownCheckbox() {
  var CheckboxDropdown = function (el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find(".dropdown-label");
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');

    this.onCheckBox();

    this.$label.on("click", function (e) {
      e.preventDefault();
      _this.toggleOpen();
    });

    this.$checkAll.on("click", function (e) {
      e.preventDefault();
      _this.onCheckAll();
    });

    this.$inputs.on("change", function (e) {
      _this.onCheckBox();
    });
  };

  CheckboxDropdown.prototype.onCheckBox = function () {
    this.updateStatus();
  };

  CheckboxDropdown.prototype.updateStatus = function () {
    var checked = this.$el.find(":checked");

    this.areAllChecked = false;

    if (checked.length <= 0) {
      this.$label.html("Chọn game");
    } else if (checked.length === 1) {
      this.$label.html(checked.parent("label").text());
    } else if (checked.length === this.$inputs.length) {
      this.$label.html("Tất cả các loại game");
      this.areAllChecked = true;
    } else {
      this.$label.html(checked.length + " Selected");
    }
  };

  CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
    if (!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html("Bỏ chọn tất cả");
      this.$inputs.prop("checked", true);
    } else {
      this.areAllChecked = false;
      this.$checkAll.html("Tất cả các loại game");
      this.$inputs.prop("checked", false);
    }

    this.updateStatus();
  };

  CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
    var _this = this;

    if (!this.isOpen || forceOpen) {
      this.isOpen = true;
      this.$el.addClass("on");
      $(document).on("click", function (e) {
        if (!$(e.target).closest("[data-control]").length) {
          _this.toggleOpen();
        }
      });
    } else {
      this.isOpen = false;
      this.$el.removeClass("on");
      $(document).off("click");
    }
  };

  var checkboxesDropdowns = document.querySelectorAll(
    '[data-control="checkbox-dropdown"]'
  );
  for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
}
function checkAnswer() {
  $(".game-object-child-wrap").each(function () {
    const $wrap = $(this);

    $wrap.find(".quiz-choice-item").on("click", function () {
      $wrap.find(".quiz-choice-item").removeClass("selected");

      $(this).addClass("selected");
    });
  });
}

function countdown() {
  const $timer = $(".test-clock-panel span");

  // Đặt thời gian bắt đầu là 40 phút = 2400 giây
  let totalSeconds = 40 * 60;

  // Hàm format giây thành hh:mm:ss
  function formatTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    return [h, m, s].map((unit) => String(unit).padStart(2, "0")).join(":");
  }

  // Hiển thị thời gian khởi đầu
  $timer.text(formatTime(totalSeconds));

  // Bắt đầu đếm ngược
  let countdown = setInterval(() => {
    totalSeconds--;
    $timer.text(formatTime(totalSeconds));

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      $timer.text("00:00:00");
      alert("Hết giờ!");
    }
  }, 1000);
}
