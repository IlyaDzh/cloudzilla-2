function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        document.body.parentNode.classList.add("modal-open");
        modal.classList.add("show");
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        document.body.parentNode.classList.remove("modal-open");
        modal.classList.remove("show");
    }
}

const modalForm = document.getElementById("modal-form");
const formResult = document.getElementById("modal-form-result");

modalForm.onsubmit = async e => {
    e.preventDefault();

    formResult.classList.remove("result-green");
    formResult.classList.remove("result-red");
    formResult.innerHTML = "";

    const response = await fetch("/request_demo.php", {
        method: "POST",
        body: new FormData(modalForm)
    });

    if (response.status === 200) {
        modalForm.reset();
        formResult.classList.add("result-green");
        formResult.innerHTML = "Your request successfully sent";
    } else if (response.status === 400) {
        formResult.classList.add("result-red");
        formResult.innerHTML = "Missed some required fields.";
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIiwic2VuZC1mb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG9wZW5Nb2RhbChpZCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoaWQpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtZm9ybVwiKTtcclxuY29uc3QgZm9ybVJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtZm9ybS1yZXN1bHRcIik7XHJcblxyXG5tb2RhbEZvcm0ub25zdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBmb3JtUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZXN1bHQtZ3JlZW5cIik7XHJcbiAgICBmb3JtUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZXN1bHQtcmVkXCIpO1xyXG4gICAgZm9ybVJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvcmVxdWVzdF9kZW1vLnBocFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEobW9kYWxGb3JtKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgbW9kYWxGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgZm9ybVJlc3VsdC5jbGFzc0xpc3QuYWRkKFwicmVzdWx0LWdyZWVuXCIpO1xyXG4gICAgICAgIGZvcm1SZXN1bHQuaW5uZXJIVE1MID0gXCJZb3VyIHJlcXVlc3Qgc3VjY2Vzc2Z1bGx5IHNlbnRcIjtcclxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBmb3JtUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJyZXN1bHQtcmVkXCIpO1xyXG4gICAgICAgIGZvcm1SZXN1bHQuaW5uZXJIVE1MID0gXCJNaXNzZWQgc29tZSByZXF1aXJlZCBmaWVsZHMuXCI7XHJcbiAgICB9XHJcbn07XHJcbiJdfQ==
