document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("export").addEventListener("click", async () => {
    const metadata = {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      url: window.location.href
    };

    const blob = new Blob([JSON.stringify([metadata], null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "metahunt_snapshot.json";
    a.click();

    URL.revokeObjectURL(url);
  });
});
