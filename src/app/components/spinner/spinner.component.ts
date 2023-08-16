import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="flex items-center space-x-2">
    <svg
      class="animate-spin h-5 w-5 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.86 3.022 7.969l2-2.678z"
      ></path>
    </svg>
    <span class="text-gray-600">Loading...</span>
  </div>`,
})
export class SpinnerComponent {}
