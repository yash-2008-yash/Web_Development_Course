function storeTitle() {
    const title_value = document.getElementById("title_input").value
    const title = document.getElementById("title")
    title.innerHTML = title_value
}

function storeDuration() {
    const duration_value = document.getElementById("duration_input").value
    const duration = document.getElementById("duration")
    duration.innerHTML = duration_value
}

function storeChannel() {
    const channel_value = document.getElementById("channel_name_input").value
    const channel = document.getElementById("channel_name")
    channel.innerHTML = channel_value
}

function storeViews() {
    const views_value = document.getElementById("views_input").value
    const views = document.getElementById("views")
    views.innerHTML = `${views_value} views`
}

function storeMonths() {
    const months_value = document.getElementById("months_input").value
    const months = document.getElementById("months")
    months.innerHTML = `${months_value} months old`

}

const thumbnail = document.getElementById("thumbnail_input")
const preview = document.getElementById("preview")

thumbnail.addEventListener('change', function () {
    const file = thumbnail.files[0]

    if (!file) return;

    preview.src = URL.createObjectURL(file)
});