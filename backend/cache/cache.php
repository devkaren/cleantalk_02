<?php
class Cache {
    private string $cacheFile = __DIR__ . '/response.txt';

    public function getResponse($cacheTime): string|bool
    {
        try {
            $cacheFile = __DIR__ . '/response.txt';

            if (file_exists($this->cacheFile) && time() - filemtime($cacheFile) < $cacheTime) {
                return file_get_contents($this->cacheFile);
            }

            return false;
        } catch (Exception $e) {
            // Empty catch block
        }
    }

    public function setResponse($response): void
    {
        try {
            if (file_exists($this->cacheFile)) {
                file_put_contents($this->cacheFile, $response);
            }
        } catch (Exception $e) {
            // Empty catch block
        }
    }
}





