import sys
sys.path.insert(0, 'backend')

try:
    from main import app
    print("Backend imports successfully")
    print("Server ready to start")
    print("\nRun: python backend/main.py")
except Exception as e:
    print(f"Error: {e}")
