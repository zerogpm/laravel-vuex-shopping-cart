<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Questions extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'user' => $this->user
        ];
    }

    // This outside of your Api data { }
    public function with($request)
    {
        return [
          'version' => '2.0.0',
          'valid_as_of' => date('D, d M Y H:1:s')
        ];
    }
}
