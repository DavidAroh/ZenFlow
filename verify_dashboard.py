from playwright.sync_api import sync_playwright
import time

def verify_dashboard():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify Main Dashboard (Screen 1)
        print("Verifying Dashboard...")
        page.goto("http://localhost:5173/")
        try:
            page.wait_for_selector("text=Wellness Insights", timeout=10000)
            print("Dashboard loaded.")
            page.screenshot(path="/home/jules/verification/dashboard.png")
        except Exception as e:
            print(f"Dashboard failed: {e}")
            page.screenshot(path="/home/jules/verification/dashboard_error.png")

        # Verify Work Log (Screen 2)
        print("Verifying Work Log...")
        page.goto("http://localhost:5173/work-log")
        try:
            page.wait_for_selector("text=Work Hours Log", timeout=10000)
            print("Work Log loaded.")
            page.screenshot(path="/home/jules/verification/work_log.png")
        except Exception as e:
            print(f"Work Log failed: {e}")

        # Verify Focus Mode (Screen 4)
        print("Verifying Focus Mode...")
        page.goto("http://localhost:5173/focus-mode")
        try:
            page.wait_for_selector("text=FocusFlow", timeout=10000)
            print("Focus Mode loaded.")
            page.screenshot(path="/home/jules/verification/focus_mode.png")
        except Exception as e:
            print(f"Focus Mode failed: {e}")

        browser.close()

if __name__ == "__main__":
    verify_dashboard()
